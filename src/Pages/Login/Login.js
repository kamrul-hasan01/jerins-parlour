import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../Home/Header/Header';

const Login = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Log in</title>

            </Helmet>
            <Header />
            <h1>
                Log in  page
            </h1>
        </div>
    );
};

export default Login;