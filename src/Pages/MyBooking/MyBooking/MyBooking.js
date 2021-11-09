import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRouteMatch, Switch, Route } from "react-router-dom";
import Review from '../Review/Review';
import BookingList from '../BookingList/BookingList';
import './MyBooking.css'
import { Helmet } from 'react-helmet';
import logo from '../../../img/logo.png'
const MyBooking = () => {
    const { path, url } = useRouteMatch();
    return (
        <div className="bg-light">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Booking</title>

            </Helmet>

            <Container>
                <Row className="py-4" >
                    <Col md={4}>

                        <Image src={logo} style={{ height: "48px", width: "128px" }} />
                    </Col>
                    <Col md={8}>
                        <h1 className="fs-2 fw-light">Manage My Bookings and Review</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="custom-my-booking-link panel-bg ps-4">
                        <Link to="/home"> <span><i className="fas fa-house-user"></i></span> Home</Link>
                        <Link to={`${url}`}> <span><i className="fas fa-shopping-bag"></i></span> My Booking List</Link>
                        <Link to={`${url}/review`}> <span><i className="far fa-comment-dots"></i></span> Review</Link>
                    </Col>
                    <Col md={9}>
                        <Switch>
                            <Route exact path={path}>
                                <BookingList></BookingList>
                            </Route>
                            <Route path={`${path}/review`}>
                                <Review></Review>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MyBooking;