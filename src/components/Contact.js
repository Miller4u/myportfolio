import { Container, Botton, Form, Col, Row, Button } from "react-bootstrap";
const Contact = () => {
  return (
    <Container className="my-5 bg-custom p-5" fluid id="contact">
      <h1 className="text-center fw-bold">Send Message</h1>
      <Row className="justify-content-center">
        <Col md={5}>
          <Form.Group>
            <Form.Label>Full name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full name"
              className="shadow p-3 rounded-0"
            />
          </Form.Group>
        </Col>
        <Col md={5}>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              className="shadow p-3 rounded-0"
            />
          </Form.Group>
        </Col>

        <Col md={10} className="mt-3">
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Message"
              className="shadow p-3 rounded-0"
            />
          </Form.Group>
        </Col>
        <Col md={3} className="d-grid mt-4">
          <Button className="p-3 shadow rounded-0" variant="outline-dark">
            Send
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default Contact;
