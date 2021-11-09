import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import logo from '../../../img/logo.png'
import { useRouteMatch, Switch, Route } from "react-router-dom";
import AddService from '../AddService/AddService';
import AllService from '../AllService/AllService';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
const AdminHome = () => {
    const { path, url } = useRouteMatch();
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Admin Panel</title>

            </Helmet>
            <Container>
                <Row className="py-4" >
                    <Col md={4}>

                        <Image src={logo} style={{ height: "48px", width: "128px" }} />
                    </Col>
                    <Col md={8}>
                        <h1 className="fs-2 fw-light">Manage Bookings, Add Service, Admin</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className="custom-my-booking-link panel-bg ps-4">
                        <Link to="/home"> <span><i className="fas fa-house-user"></i></span> Home</Link>
                        <Link to={`${url}`}> <span><i className="fas fa-shopping-bag"></i></span> Order  List</Link>
                        <Link to={`${url}/addService`}> <span><i className="fas fa-plus"></i></span> Add Service</Link>
                        <Link to={`${url}/makeAdmin`}> <span><i className="fas fa-user-plus"></i></span> Make Admin</Link>
                    </Col>
                    <Col md={9}>
                        <Switch>
                            <Route exact path={path}>
                                <AllService></AllService>
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

export default AdminHome;