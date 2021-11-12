import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const MakeAdmin = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Make Admin</title>

            </Helmet>
            <Container>
                <Row className=" ms-md-5">
                    <Col md={7} className="custom-review-from-bg ms-md-4">
                        <h4 className="py-2">Make an Admin</h4>
                        <Form>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" className="mb-3" >
                                    <Form.Control
                                        size="lg"
                                        required
                                        type="email"
                                        placeholder="Email"
                                    />
                                </Form.Group>
                            </Row>
                            <p className="text-center my-3"> <Button type="submit" variant="danger" className="banner-btn"> Make an Admin</Button></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MakeAdmin;