import React from "react";
import {Card, Button, Col} from "react-bootstrap";

const Post = (props) => (
    <Col xs={12} sm={12} md={10} lg={5}>     
        <div className="p-3">
            <Card>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.excerpt}
                </Card.Text>
                <Button variant="primary" href={props.readMore}>Read more...</Button>
                </Card.Body>
            </Card>
        </div>
    </Col>
);

export default Post;