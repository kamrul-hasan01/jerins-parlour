import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import profIMG from '../../../img/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const Professional = () => {
    return (
        <Container className="py-5">
            <Row>
                <Col md={6}>
                    <Image src={profIMG} rounded fluid />
                </Col>
                <Col md={6} className="ps-5 d-flex align-items-center">
                    <div >
                        <h2 className="text-bold">Let us Handle your <br /> screen <span style={{ color: "#F63E7B" }}>Professional</span>.</h2>
                        <p className="my-4 text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ut vel natus consequuntur tempora reprehenderit atque voluptatibus corporis, voluptatem unde hic facilis officia fugit in culpa quae ullam enim dolor.</p>
                        <Row>
                            <Col md={4} xs={6}> <p> <span className="fs-1 ps-2" style={{ color: "#F63E7B" }}>500+ </span> <br /> Happy Customer </p> </Col>
                            <Col md={4} sx={6}>
                                <p> <span className="fs-1 ps-2" style={{ color: "#F63E7B" }}>16+ </span> <br /> Total Service </p>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Professional;