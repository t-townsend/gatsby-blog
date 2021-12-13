import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import {Form, Button} from "react-bootstrap"

export default () => (
 <PrimaryLayout column="col-10">
            <div className="pt-5">
                <h1>Contact Us</h1>
                    <Form >
                        <Form.Group className="mb-3" controlId="contactForm.Email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contactForm.Subject">
                            <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" placeholder="Subject" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="contactForm.Message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
  </PrimaryLayout>
)
