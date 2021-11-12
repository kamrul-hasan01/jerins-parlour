import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Service.css'
const Service = () => {

    return (
        <div>
            <Container className="py-5">
                <h4 className="text-center fs-2">Our Awesome  <span style={{ color: "#F63E7B" }}> Service</span> </h4>
                <Row xs={1} md={3} className="g-5 mt-4">
                    <Col>
                        <Card className="border-0 custom-service-shadow m-4 rounded">
                            <div className="d-flex justify-content-center"> <Card.Img variant="top" src="https://i.ibb.co/q94Z0sY/Group-1373.png" style={{ height: "72px", width: "72px", marginTop: "15px" }} /></div>
                            <Card.Body>
                                <Card.Title className="text-center mb-0">Anti Age Face Treatment</Card.Title>
                                <p className="text-center mt-0 mb-1 fs-5 fw-bold" style={{ color: "#F63E7B" }}>$ 199</p>
                                <Card.Text className="mb-0 text-center">
                                    We craft stunning and amazing web UI, using a well drrafted UX to fit your product.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 custom-service-shadow m-4 rounded">
                            <div className="d-flex justify-content-center"> <Card.Img variant="top" src="https://i.ibb.co/1vZDBv4/Group-1372.png" style={{ height: "72px", width: "72px", marginTop: "15px" }} /></div>
                            <Card.Body>
                                <Card.Title className="text-center mb-0">Hair Color & Styeing</Card.Title>
                                <p className="text-center mt-0 mb-1 fs-5 fw-bold" style={{ color: "#F63E7B" }}>$ 99</p>
                                <Card.Text className="mb-0 text-center">
                                    Amazing flyers, social media posts and brand representations that would make your brand stand out.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="border-0 custom-service-shadow m-4 rounded">
                            <div className="d-flex justify-content-center"> <Card.Img variant="top" src="https://i.ibb.co/HgVXnDC/Group-1374.png" style={{ height: "72px", width: "72px", marginTop: "15px" }} /></div>
                            <Card.Body>
                                <Card.Title className="text-center mb-0">Screen Care Treatment</Card.Title>
                                <p className="text-center mt-0 mb-1 fs-5 fw-bold" style={{ color: "#F63E7B" }}>$ 199</p>
                                <Card.Text className="mb-0 text-center">
                                    With well written codes, we build amazing apps for all platforms, mobile and web apps in general.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default Service;