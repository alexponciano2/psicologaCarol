import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap";
import logo from "../../img/LOGO2.png";
import styles from './Navbar.module.css'

function CustomNavbar() {
  // Estado para controlar o Offcanvas
  const [show, setShow] = useState(false);

  // Funções para abrir e fechar o Offcanvas
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Navbar Principal com `expand="lg"` para ativar Offcanvas em resoluções menores */}
      <Navbar style={{ backgroundColor: '#089C9C' }} expand="lg"  className={styles.mb3} >
        <Container fluid >
          {/* Logo com Link para a Home */}
          <Navbar.Brand as={Link} to="/">
            <img src={logo} alt="Logo" style={{ height: '50px'}} />
          </Navbar.Brand>

          {/* Botão para abrir o Offcanvas, visível apenas em telas menores */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />

          {/* Menu em colapso para telas grandes (Navbar padrão) */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto"> {/* Alinha os links à direita */}
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/aboutme">Sobre Mim</Nav.Link>
              <Nav.Link as={Link} to="/company">Empresa</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>

          {/* Offcanvas Menu, que só aparece em telas menores */}
          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            className="d-lg-none" // Esconde o Offcanvas em telas grandes
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/* Cada link chama handleClose para fechar o Offcanvas */}
                <Nav.Link as={Link} to="/" onClick={handleClose}>Home</Nav.Link>
                <Nav.Link as={Link} to="/aboutme" onClick={handleClose}>Sobre Mim</Nav.Link>
                <Nav.Link as={Link} to="/company" onClick={handleClose}>Empresa</Nav.Link>
                <Nav.Link as={Link} to="/contact" onClick={handleClose}>Contato</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default CustomNavbar;
