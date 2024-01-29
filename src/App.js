import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Movies from "./Components/movies";
import NavScrollExample from "./Components/navbar";
import MovieForm from "./Components/movieForm";
import Customers from "./Components/customers";
import Rentals from "./Components/rentals";
import LoginForm from "./Components/login";
import Home from "./Components/home";
import { Route, Routes, Navigate } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavScrollExample totalCounters={5} />
        <main className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />

            <Route path="/movies/:id" element={<MovieForm />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
