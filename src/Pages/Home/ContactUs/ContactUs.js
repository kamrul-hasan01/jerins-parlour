import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

const ContactUs = () => {
    return (
        <Container className="py-5" style={{ backgroundColor: "#FFF8F5" }}>
            <h2 className="text-center py-4">Let us handle your <br /> project,Professionally.</h2>
            <Row className=" d-flex  justify-content-center">

                <Col md={8}>
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="6" >
                                <Form.Control
                                    size="lg"
                                    required
                                    type="text"
                                    placeholder="First name"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Control
                                    size="lg"
                                    required
                                    type="text"
                                    placeholder="Last name"

                                />
                            </Form.Group>
                        </Row>
                        <Row className="mb-3" >
                            <Form.Group as={Col} md="6" >
                                <Form.Control
                                    size="lg"
                                    required
                                    type="text"
                                    placeholder="Your Email"
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="6">
                                <Form.Control
                                    size="lg"
                                    required
                                    type="text"
                                    placeholder="Phone Number"

                                />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                            <Form.Control as="textarea" rows={3} placeholder="Your message" />
                        </Form.Group>
                        <p className="text-center my-3"> <Button type="submit" variant="danger" className="banner-btn">Send Message</Button></p>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
};

export default ContactUs;