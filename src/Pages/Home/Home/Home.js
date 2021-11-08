import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Professional from '../Professional/Professional';

const Home = () => {
    const headerBG = {
        backgroundColor: "#FFF8F5"

    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>

            </Helmet>
            <div style={headerBG}>
                <Header></Header>
                <Banner></Banner>
                <Professional></Professional>
                <ContactUs></ContactUs>

            </div>
            <Footer></Footer>


        </div>
    );
};

export default Home;