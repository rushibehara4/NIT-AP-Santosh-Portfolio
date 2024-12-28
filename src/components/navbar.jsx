import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../index.css";

const myNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="header-container">
      <Container>
        <Link to="/" className="link-name-style">
          <div className="logo-container">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEADY5KEsacGwQsq4sFtcf9Owru7ZLHM1TeE4INslWO0eSP2G0koOr0pU-OrrkJwW&usqp=CAU"
              alt="nit-logo"
              className="nit-logo"
            />
            <h3 className="nav-logo-name">Santosh Kumar Behara</h3>
          </div>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/research" className="nav-links-element">
              Research
            </Link>
            <Link to="/publication" className="nav-links-element">
              Publication
            </Link>
            <Link to="/presentation" className="nav-links-element">
              Presentation
            </Link>
            <Link to="/contact" className="nav-links-element">
              Contact
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default myNavbar;
