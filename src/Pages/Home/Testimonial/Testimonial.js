import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import Rating from 'react-rating';

const Testimonial = () => {
    const [reviews, setReviews] = useState({});
    useEffect(() => {
        axios.get('https://pure-fjord-61142.herokuapp.com/reviews')
            .then(res => setReviews(res.data))
    }, [])
    return (
        <Container className="py-5">
            <h4 className="text-center fs-2">Testimonials</h4>
            <Row xs={1} md={3} className="g-4 mt-4">

                {reviews.length ? reviews?.map(review => <Col
                    key={review._id}
                >
                    <Card className="m-4 border-0">
                        <div className="d-flex justify-content-center"> <Card.Img variant="top" src={review.img} style={{ height: "150px", width: "150px", marginTop: "10px" }} /></div>
                        <Card.Body>
                            <Card.Title className="text-center mb-0">{review.name}</Card.Title>
                            <p className="text-center mt-0 mb-1">{review.company}</p>
                            <Card.Text className="mb-0">
                                {review.message}
                            </Card.Text>

                            <p className="text-center mb-1 mt-0 fs-4">     <Rating
                                initialRating={review.rating}
                                emptySymbol="far fa-star  text-warning"
                                fullSymbol="fas fa-star  text-warning"
                                readonly></Rating></p>
                        </Card.Body>
                    </Card>
                </Col>)
                    : <p className="d-flex justify-content-center align-items-center">   <Spinner animation="border" variant="info" /></p>
                }

            </Row>


        </Container>
    );
};

export default Testimonial;