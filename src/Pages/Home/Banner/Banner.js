import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';
import './Banner.css'
import bannerIMG from '../../../img/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
    return (
        <Container>
            <Row>
                <Col md={6} className="d-flex align-items-center">

                    <div>
                        <h2 className="banner-title">BEAUTY SALON <br /> FOR EVERY WOMEN</h2>
                        <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                        <Button variant="danger" className="banner-btn">Get an Appointment</Button>
                    </div>

                </Col>
                <Col md={6}>
                    <Image src={bannerIMG} rounded fluid style={{ height: "478px" }} />
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;