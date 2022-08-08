import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavigationBar = () => (
  <Navbar bg="primary" expand="lg" variant="dark">
    <Container fluid>
      {/* Main button (home) */}
      <Navbar.Brand href="/">Home</Navbar.Brand>

      {/* Toggle button */}
      <Navbar.Toggle aria-controls="navbarScroll" />

      {/* Scrolldown link group */}
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          {/* Commom link example */}
          {/* <Nav.Link href="./about">Novo Envio</Nav.Link> */}
          {/* <Nav.Link href="#action2">Link2</Nav.Link> */}

          {/* Drodown envios */}
          <NavDropdown title="Envios" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/create-send">Criar Envio</NavDropdown.Item>
            <NavDropdown.Item href="/update-send">Atualizar Envio</NavDropdown.Item>
            <NavDropdown.Item href="/query-send">Consultar Envio</NavDropdown.Item>
            {/* Divider example */}
            {/* <NavDropdown.Divider /> */}
          </NavDropdown>

          {/* Disable link example */}
          {/* <Nav.Link href="#" disabled>Likn4</Nav.Link> */}
        </Nav>

        {/* Start search */}
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Pesquisar"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="success">Pesquisar</Button>
        </Form>
        {/* End search */}

      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavigationBar;