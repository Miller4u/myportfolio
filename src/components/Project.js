import { Col, Button, Card } from "react-bootstrap";
import { useState } from "react";
import { IoIosHeart as Hrt,IoIosHeartEmpty as Hrtem } from "react-icons/io";

const Project = (props) => {
  const [state, setState] = useState(false);

  return (
    <Col md={6} className="mt-4 mt-lg-3">
      <Card className="border-0 shadow p-3 rounded-0">
        <Card.Img src={props.img} alt={props.title} className="" height={250} />
        <Card.Body>
          <h3>{props.title}</h3>

          <Button
            onClick={() => {
              setState(!state);
            }}
            variant={state ? "primary" : "outline-primary"}
            className="rounded-0"
          >
            {/** Implying Condition rendering below to allow the function togle */}
            <span>{state ? props.count + 1 : props.count}</span> Likes
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default Project;
