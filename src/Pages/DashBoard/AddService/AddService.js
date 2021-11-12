import axios from 'axios';
import React, { useState } from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const AddService = () => {
    const [newService, setNewService] = useState({});
    const handleOnBlurService = e => {
        const field = e.target.name;
        const value = e.target.value;
        const data = { ...newService };
        data[field] = value;
        setNewService(data);
    }
    const handleServiceSubmit = e => {
        e.preventDefault();
        console.log(newService)
        axios.post('https://pure-fjord-61142.herokuapp.com/services', newService)
            .then(res => {
                if (res.data.insertedId) {
                    alert("New Service add successfully")
                }
                console.log(res)
            })
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Add Service</title>

            </Helmet>
            <Container>
                <Row className=" ms-md-5">
                    <Col md={7} className="custom-review-from-bg ms-md-4">
                        <h4 className="py-2">Add Service</h4>
                        <Form onSubmit={handleServiceSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" className="mb-3" >
                                    <Form.Control
                                        size="lg"
                                        required
                                        type="text"
                                        placeholder="Title"
                                        name="serviceName"
                                        onBlur={handleOnBlurService}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12" className="mb-3" >
                                    <Form.Control
                                        size="lg"
                                        required
                                        type="text"
                                        placeholder="Images url only"
                                        name="img"
                                        onBlur={handleOnBlurService}

                                    />
                                </Form.Group>
                                <Form.Group as={Col} md="12" className="mb-3" >
                                    <Form.Control
                                        size="lg"
                                        required
                                        type="number"
                                        placeholder="Price"
                                        min="0"
                                        max="999"
                                        name="price"
                                        onBlur={handleOnBlurService}

                                    />
                                </Form.Group>


                            </Row>


                            <Form.Group className="mb-3" as={Col} md="12" controlId="exampleForm.ControlTextarea1">

                                <Form.Control as="textarea" required rows={3} placeholder="Description"
                                    name="details"
                                    onBlur={handleOnBlurService}

                                />
                            </Form.Group>
                            <p className="text-center my-3"> <Button type="submit" variant="danger" className="banner-btn"> Add Service</Button></p>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddService;