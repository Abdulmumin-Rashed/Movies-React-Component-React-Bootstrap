import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavScrollExample({ totalCounters }) {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary "
    >
      {" "}
      <span className="badge badge-pill badge-warning">{totalCounters}</span>
      <Container fluid>
        <Navbar.Brand style={{ color: "white" }} href="/">
          Home
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="bg-dark">
          <Nav
            className="me-auto my-8 my-lg-0 bg-dark"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link style={{ color: "white" }} href="/movies">
              Movies
            </Nav.Link>
            <Nav.Link style={{ color: "white" }} href="/customers">
              Customers
            </Nav.Link>
            <NavDropdown
              className="d-flex justify-content-end"
              title="Link"
              id="navbarScrollingDropdown"
              style={{ color: "dark" }}
            >
              <NavDropdown.Item href="/rentals">Rentals</NavDropdown.Item>
              <NavDropdown.Item href="/login">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link style={{ color: "white" }} href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form className="d-flex justify-content-end">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2 mr-8"
          aria-label="Search"
        />
        <Button variant="outline-success ml-2">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavScrollExample;
