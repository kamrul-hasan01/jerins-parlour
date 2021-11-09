import React, { useState } from 'react';
import { Col, Container, Form, Row, Button, Image } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import Header from '../Home/Header/Header';
import './Login.css'
import googleLogo from '../../img/Icon/gogle.png'
const Login = () => {
    const [logInData, setLogInData] = useState({})
    const [registerData, setRegisterData] = useState({})
    const [logInPage, setLogInpage] = useState(true)
    const handleLogInData = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...logInData }
        newData[field] = value;
        setLogInData(newData)
    }
    const handleRegisterData = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...registerData }
        newData[field] = value;
        setRegisterData(newData)
    }

    const login = e => {
        e.preventDefault();
        console.log(logInData)

    }
    const register = e => {
        e.preventDefault();
        console.log(registerData)

    }
    const signUpPage = d => {
        setLogInpage(d)
    }
    return (
        <div className="from-bg">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Log in</title>

            </Helmet>
            <Header />
            <div >
                <Container>
                    <Row className="f-flex justify-content-center pt-2">
                        <Col md={4} className="login-form-shadow my-5">
                            {
                                logInPage ? <Form onSubmit={login}>
                                    <Row className="mb-3 mt-5">
                                        <Form.Group as={Col} md="12" className="mb-3" >
                                            <Form.Control
                                                size="lg"
                                                required
                                                type="email"
                                                placeholder="Email"
                                                name="email"
                                                onBlur={handleLogInData}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="12" className="mb-3" >
                                            <Form.Control
                                                size="lg"
                                                required
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                onBlur={handleLogInData}

                                            />
                                        </Form.Group>



                                    </Row>


                                    <p className="text-center my-3"> <Button type="submit" variant="danger" className="banner-btn fs-4"> Log in</Button></p>
                                </Form>
                                    : <Form onSubmit={register}>
                                        <Row className="mb-3 mt-5">
                                            <Form.Group as={Col} md="12" className="mb-3" >
                                                <Form.Control
                                                    size="lg"
                                                    required
                                                    type="text"
                                                    placeholder="Full Name"
                                                    name="name"
                                                    onBlur={handleRegisterData}
                                                />
                                            </Form.Group>
                                            <Form.Group as={Col} md="12" className="mb-3" >
                                                <Form.Control
                                                    size="lg"
                                                    required
                                                    type="email"
                                                    placeholder="Email"
                                                    name="email"
                                                    onBlur={handleRegisterData}
                                                />
                                            </Form.Group>
                                            <Form.Group as={Col} md="12" className="mb-3" >
                                                <Form.Control
                                                    size="lg"
                                                    required
                                                    type="password"
                                                    placeholder="Password"
                                                    name="password"
                                                    onBlur={handleRegisterData}

                                                />
                                            </Form.Group>



                                        </Row>


                                        <p className="text-center my-3"> <Button type="submit" variant="danger" className="banner-btn fs-4"> Sing Up</Button></p>
                                    </Form>
                            }

                            <h3 className="text-center text-dark">Welcome</h3>

                            {
                                logInPage ? <p className="text-center fs-5">Login with social media</p>
                                    :
                                    <p className="text-center fs-5">Sign up with social media</p>
                            }
                            <p className="d-flex justify-content-center">
                                <Image src={googleLogo} roundedCircle style={{ height: "50px" }} />
                            </p>

                            {
                                logInPage ? <p className="text-center fs-5">Don't you have an  account ?</p>
                                    :
                                    <p className="text-center fs-5">Do you have already an account ?</p>
                            }
                            <p className="text-center my-3"> <Button variant="outline-secondary" onClick={() => signUpPage(!logInPage)}> {logInPage ? "Sign up" : "Log in"} </Button></p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Login;