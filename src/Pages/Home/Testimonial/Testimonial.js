import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Rating from 'react-rating';

const Testimonial = () => {

    return (
        <Container className="py-5">
            <h4 className="text-center fs-2">Testimonials</h4>
            <Row xs={1} md={3} className="g-4 mt-4">
                <Col>
                    <Card className="m-4 border-0">
                        <div className="d-flex justify-content-center"> <Card.Img variant="top" src="https://i.ibb.co/wg8xmCW/Ellipse-91.png" style={{ height: "150px", width: "150px", marginTop: "10px" }} /></div>
                        <Card.Body>
                            <Card.Title className="text-center mb-0">Shakil Ahmed</Card.Title>
                            <p className="text-center mt-0 mb-1">Student, Primeasia University</p>
                            <Card.Text className="mb-0">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa quae sunt placeat? Maiores autem soluta inventore! Iste, consequatur beatae?
                            </Card.Text>

                            <p className="text-center mb-1 mt-0 fs-4">     <Rating
                                initialRating="5"
                                emptySymbol="far fa-star  text-warning"
                                fullSymbol="fas fa-star  text-warning"
                                readonly></Rating></p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="m-4 border-0">
                        <div className="d-flex justify-content-center"> <Card.Img variant="top" src="https://i.ibb.co/wg43JTJ/avata.jpg" style={{ height: "150px", width: "150px", marginTop: "10px", borderRadius: "50%" }} /></div>
                        <Card.Body>
                            <Card.Title className="text-center mb-0">Kamrul Hasan</Card.Title>
                            <p className="text-center mt-0 mb-1">Student, Primeasia University</p>
                            <Card.Text className="mb-0">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa quae sunt placeat? Maiores autem soluta inventore! Iste, consequatur beatae?
                            </Card.Text>

                            <p className="text-center mb-1 mt-0 fs-4">     <Rating
                                initialRating="5"
                                emptySymbol="far fa-star  text-warning"
                                fullSymbol="fas fa-star  text-warning"
                                readonly></Rating></p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="m-4 border-0">
                        <div className="d-flex justify-content-center"> <Card.Img variant="top" src="https://i.ibb.co/LQWYSwN/Ellipse-92.png" style={{ height: "150px", width: "150px", marginTop: "10px" }} /></div>
                        <Card.Body>
                            <Card.Title className="text-center mb-0">Shakil Ahmed</Card.Title>
                            <p className="text-center mt-0 mb-1">Student, Primeasia University</p>
                            <Card.Text className="mb-0">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa quae sunt placeat? Maiores autem soluta inventore! Iste, consequatur beatae?
                            </Card.Text>

                            <p className="text-center mb-1 mt-0 fs-4">     <Rating
                                initialRating="5"
                                emptySymbol="far fa-star  text-warning"
                                fullSymbol="fas fa-star  text-warning"
                                readonly></Rating></p>
                        </Card.Body>
                    </Card>
                </Col>


            </Row>


        </Container>
    );
};

export default Testimonial;