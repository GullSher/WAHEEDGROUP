import React from 'react';
import Row1 from '../Rows/Row1.js';
import Row2 from '../Rows/Row2.js';
import Footer from '../Footer/Footer.js';

const ContactUs = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh',
                backgroundColor: 'red'
            }}
        >
            <h1>Contact Us</h1>
            <div className='Rows'> <Row1 /></div>
            <div className='Rows'> <Row2 /></div>
            <div className="Footer"><Footer /></div>

        </div>

    );
};

export default ContactUs;

//https://github.com/briancodex/react-navbar-v3/blob/main/src/components/Navbar/index.js