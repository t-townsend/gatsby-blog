import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Post from "../components/Post";
import {Col, Row} from "react-bootstrap";

export default () => (
  <main>
    <Header/>
      <div className="container justify-content-center">
        <Row xs={1} md={2} className="g-4 justify-content-lg-center">
          
            <Col lg={12} md={10}>
              <Row>
                <Col xs={12} sm={12} md={10} lg={5}>
                  <Post title="This is our first post" excerpt="This is the content of the card."/>
                </Col>
                <Col xs={12} sm={12} md={10} lg={5}>
                  <Post title="This is our first post" excerpt="This is the content of the card."/>
                </Col>
                <Col xs={12} sm={12} md={10} lg={5}>
                  <Post title="This is our first post" excerpt="This is the content of the card."/>
                </Col>
              </Row>
            </Col>
        </Row>
      </div>
     <Footer fixed="bottom"/>
  </main>
      
);
