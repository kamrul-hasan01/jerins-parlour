import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#F63E7B", color: "white" }}>
            <Container>
                <Row className="pt-5 pb-3">
                    <Col md={4}>
                        <Row>
                            <Col md={1}>
                                <p className="fs-3"> <i className="fas fa-map-marker-alt"></i></p>
                            </Col>
                            <Col md={11}>
                                <p className="fs-5"> H#000 , Road #00,New DOHS, Mohakhali, Dhaka, Bangladesh</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}>
                        <h5>Company </h5>
                        <p className="mb-0">About</p>
                        <p className="mb-0">Project</p>
                        <p className="mb-0">Our Team</p>
                        <p className="mb-0">Terms Condition</p>
                        <p className="mb-0">Submit Listing</p>
                    </Col>
                    <Col md={2}>
                        <h5>Quick Links </h5>
                        <p className="mb-0">Quick Links</p>
                        <p className="mb-0">Rental</p>
                        <p className="mb-0">Sales</p>
                        <p className="mb-0">Contact</p>
                        <p className="mb-0">Our BLogs</p>
                    </Col>
                    <Col md={4}>
                        <h5>About Us</h5>
                        <p className="my-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id consectetur necessitatibus, a molestiae non </p>
                        <p>
                            <span><i className="fab fa-facebook-square fs-2 me-2"></i></span>
                            <span><i className="fab fa-instagram-square fs-2 me-2"></i></span>
                            <span><i className="fab fa-linkedin fs-2 me-2"></i></span>
                            <span><i className="fab fa-twitter-square fs-2 me-2"></i></span>
                        </p>

                    </Col>
                </Row>
            </Container>
        </div >
    );
};

export default Footer;