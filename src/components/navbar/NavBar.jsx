import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { GiEightBall, GiHamburgerMenu } from "react-icons/gi";

import "./NavBar.css";
function NavBar({ links }) {
  const navLinks = links
    .filter((item) => item.isLink)
    .map((item, index) => (
      <Nav.Link className="nav-item" key={index}>
        <Link className="nav-links" to={item.link}>
          {item.title}
        </Link>
      </Nav.Link>
    ));
  return (
    <>
      <>
        <Navbar collapseOnSelect expand="lg" className="navbar">
          <Navbar.Brand className="navbar-brand">
            <Link to="/" className="navbar-logo">
              <GiEightBall />
              M8Ball
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <GiHamburgerMenu color={"#fff"} />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto nav-links ">{navLinks}</Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    </>
  );
}

export default NavBar;
