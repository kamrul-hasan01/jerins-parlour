import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import './Review.css'

const Review = () => {
    const [review, setReview] = useState({});
    const handleReviewOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const data = { ...review };
        data[field] = value;
        setReview(data);

    }
    const handeReviewSubmit = e => {
        e.preventDefault()
        console.log(review)
        axios.post('https://pure-fjord-61142.herokuapp.com/reviews', review)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Review inserted Success")
                    e.value = " "
                }
            })
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Review</title>

            </Helmet>
            <Container>
                <Row className=" ms-md-5">
                    <Col md={7} className="custom-review-from-bg ms-md-4">
                        <h4 className="py-2">Review</h4>
                        <Form onSubmit={handeReviewSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" className="mb-3" >
                                    <Form.Control
                                        size="lg"
                                        required
                                        type="text"
                                        placeholder="Full name"
                                        name="name"
                                        onBlur={handleReviewOnBlur}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12" className="mb-3" >
                                    <Form.Control
                                        size="lg"
                                        required
                                        type="text"
                                        placeholder="IMG url"
                                        name="img"
                                        onBlur={handleReviewOnBlur}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12" className="mb-3" >
                                    <Form.Control
                                        size="lg"
                                        required
                                        type="text"
                                        placeholder="Company's name, Designation"
                                        name="company"
                                        onBlur={handleReviewOnBlur}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12" className="mb-3" >
                                    <Form.Control
                                        size="lg"
                                        required
                                        type="number"
                                        placeholder="Ratings"
                                        min="0" max="5"
                                        name="rating"
                                        onBlur={handleReviewOnBlur}
                                    />
                                </Form.Group>

                            </Row>


                            <Form.Group className="mb-3" as={Col} md="12" controlId="exampleForm.ControlTextarea1">

                                <Form.Control
                                    as="textarea" required
                                    rows={3}
                                    placeholder="Your message"
                                    name="message"
                                    onBlur={handleReviewOnBlur} />
                            </Form.Group>
                            <p className="text-center my-3"> <Button type="submit" variant="danger" className="banner-btn">Submit</Button></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Review;