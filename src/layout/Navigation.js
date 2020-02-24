import React, { useState, useEffect } from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const isTopChanged = window.scrollY < 600;
      if (isTopChanged !== isTop) {
        setIsTop(false);
      } else {
        setIsTop(true)
      }
    });
  }, []);

  return (
    <Navbar
      expand="lg"
      className={isTop ? "navigationBar" : "navigationBar-scrolling"}
      fixed="top"
    >
      <Navbar.Brand href="#home" className={isTop ? "" : "dropDown-style"}>
        Chris Tri
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className={isTop ? "" : "dropDown-style"}>
            Home
          </Nav.Link>
          <Nav.Link href="#projects" className={isTop ? "" : "dropDown-style"}>
            Projects
          </Nav.Link>
          <Nav.Link href="#TechStack" className={isTop ? "" : "dropDown-style"}>
            TechStack
          </Nav.Link>
          <Nav.Link href="#About" className={isTop ? "" : "dropDown-style"}>
            About Me
          </Nav.Link>
          <Nav.Link href="#Contact" className={isTop ? "" : "dropDown-style"}>
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
