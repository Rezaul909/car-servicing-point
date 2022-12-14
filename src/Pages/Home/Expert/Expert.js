import React from "react";
import { Button, Card } from "react-bootstrap";

const Expert = ({expert}) => {
    const {name, img} = expert;
  return (
    <div className="">
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" className="d-block mx-auto">Hire Me</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Expert;
