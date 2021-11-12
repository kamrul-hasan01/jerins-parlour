import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useRouteMatch, Switch, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import logo from '../../../img/logo.png'
import './Dashboard.css'
import Review from '../Review/Review';
import AddService from '../AddService/AddService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
const DashBoard = () => {
    const { path, url } = useRouteMatch();
    return (
        <div className="bg-light">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard</title>

            </Helmet>

            <Container>
                <Row className="py-4" >
                    <Col md={4}>

                        <Image src={logo} style={{ height: "48px", width: "128px" }} />
                    </Col>
                    <Col md={8}>
                        <h1 className="fs-2 fw-light">Dashboard</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="custom-my-booking-link panel-bg ps-4">
                        <Link to="/home"> <span><i className="fas fa-house-user"></i></span> Home</Link>

                        <Link to={`${url}`}> <span><i className="far fa-comment-dots"></i></span> Review</Link>
                        <Link to={`${url}/addService`}> <span><i className="fas fa-plus"></i></span> Add Service</Link>
                        <Link to={`${url}/makeAdmin`}> <span><i className="fas fa-user-plus"></i></span> Make Admin</Link>
                    </Col>
                    <Col md={9}>
                        <Switch>
                            <Route exact path={path}>
                                <Review></Review>
                            </Route>
                            <Route path={`${path}/addService`}>
                                <AddService></AddService>
                            </Route>
                            <Route path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashBoard;