import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row, Spinner } from 'react-bootstrap';
import './Service.css'
const Service = () => {
    const [services, setServices] = useState({});
    useEffect(() => {
        axios.get('https://pure-fjord-61142.herokuapp.com/services')
            .then(res => setServices(res.data))
    }, [])
    return (
        <div>
            <Container className="py-5">
                <h4 className="text-center fs-2">Our Awesome  <span style={{ color: "#F63E7B" }}> Service</span> </h4>
                <Row xs={1} md={3} className="g-5 mt-4">

                    {services.length ? services?.map(service => <Col
                        key={service._id}
                    >
                        <Card className="border-0 custom-service-shadow m-4 rounded">
                            <div className="d-flex justify-content-center"> <Card.Img variant="top" src={service.img} style={{ height: "72px", width: "72px", marginTop: "15px" }} /></div>
                            <Card.Body>
                                <Card.Title className="text-center mb-0">{service.serviceName}</Card.Title>
                                <p className="text-center mt-0 mb-1 fs-5 fw-bold" style={{ color: "#F63E7B" }}>$ {service.price}</p>
                                <Card.Text className="mb-0 text-center">
                                    {service.details
                                    }
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>)
                        : <p className="d-flex justify-content-center align-items-center">   <Spinner animation="border" variant="info" /></p>
                    }

                </Row>


            </Container>
        </div>
    );
};

export default Service;