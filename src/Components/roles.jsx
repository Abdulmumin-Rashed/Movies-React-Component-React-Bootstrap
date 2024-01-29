import React, { Component } from "react";

class RoleList extends Component {
  state = {
    roles: [],
  };

  componentDidMount() {
    this.fetchRoles();
  }

  fetchRoles = async () => {
    try {
      const response = await fetch(
        "https://localhost:7280/api/Role/GetAllRoles"
      ); // Replace with your API endpoint
      const data = await response.json();
      this.setState({ roles: data });
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this role?"
    );
    if (!confirmDelete) {
      return; // If the user cancels the deletion, exit the method
    }
    try {
      const response = await fetch(`https://localhost:7280/api/Role/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (response.ok) {
        this.setState((prevState) => ({
          roles: prevState.roles.filter((role) => role.id !== id),
        }));
        console.log(data.message);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error deleting role:", error);
    }
  };

  render() {
    const { length: count } = this.state.roles;
    if (count === 0) return <p>There are no roles in the database</p>;
    const { roles } = this.state;

    return (
      <div>
        <p>Showing {count} Roles in the database</p>
        <h1>Role List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>

              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((role) => (
              <tr key={role.id}>
                <td>{role.id}</td>
                <td>{role.name}</td>

                <td>
                  <button
                    onClick={() => this.handleDelete(role.id)}
                    className="btn btn-danger btm-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default RoleList;
