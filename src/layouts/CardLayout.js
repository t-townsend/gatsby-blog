import React from "react";
import {Col, Row} from "react-bootstrap";

const CardLayout = (props) => (
    <div className="container justify-content-center">
    <Row xs={1} md={2} className="g-4 justify-content-lg-center">
        <Col lg={12} md={10}>
          <Row>
            {props.children}
          </Row>
        </Col>
    </Row>
  </div>
   
);

export default CardLayout;