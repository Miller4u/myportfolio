import {Offcanvas,Container,Nav,Navbar} from "react-bootstrap"

function Navibar() {
  return (
 
     <> 
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className="p-3 bg-custom" fixed="top">
          <Container>
            <Navbar.Brand href="#" className="fw-bold">MIL</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Miller
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className="bg-custom">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#home" className="link-dark">Home</Nav.Link>
                  <Nav.Link href="#work"className="link-dark">Work</Nav.Link>
                  <Nav.Link href="#contact"className="link-dark">Contact</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navibar;
