import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="">Mercadinho BigBom</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/products-list">Lista de produtos</Nav.Link>
            <Nav.Link href="/product-add">Adicionar Produto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar