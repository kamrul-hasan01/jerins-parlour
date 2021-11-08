import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import Header from '../Header/Header';
import Professional from '../Professional/Professional';

const Home = () => {
    const headerBG = {
        backgroundColor: "#E5E5E5"
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>

            </Helmet>
            <div className={headerBG}>
                <Header></Header>
                <Banner></Banner>
                <Professional></Professional>
            </div>


        </div>
    );
};

export default Home;