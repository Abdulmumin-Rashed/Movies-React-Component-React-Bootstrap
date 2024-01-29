import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import MoviesTable from "./moviesTable";
import PaginationComponent from "./common/utilitis/pagination";
import ActiveExample from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 3,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }
  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handleGernreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };
  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      movies: allMovies,
      sortColumn,
    } = this.state;

    if (count === 0) return <p>There are no movies in the database</p>;
    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    // Paginate the movies array

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const startIndex = (currentPage - 1) * pageSize;
    const movies = sorted.slice(startIndex, startIndex + pageSize);

    const pageCount = Math.ceil(filtered.length / pageSize);
    // const pages = Array.from(Array(pageCount)).map((_, index) => index + 1);
    const showPagination = filtered.length > pageSize; // Check if pagination should be displayed
    return (
      <div className="row mt-4">
        <div className="col-2">
          <ActiveExample
            items={this.state.genres}
            selectedItem={this.state.selectedGenre}
            onItemSelect={this.handleGernreSelect}
          />
        </div>
        <div className="col mt-2">
          <p className="text-center">
            Showing {filtered.length} movies in the database
          </p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            sortColumn={sortColumn}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          {showPagination && ( // Render pagination only if showPagination is true
            <PaginationComponent
              pageCount={pageCount}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Movies;
