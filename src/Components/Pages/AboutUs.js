import React from 'react';
import Row1 from "../Rows/Row1"
import Row2 from '../Rows/Row2';

const AboutUs = () => {
    return (
        <div
            style={{
                // display: 'flex',
                // width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                // height: '20vh',
                height: '100%',
                backgroundColor: 'white',
            }}
        >
            <h1>This Heading is from Page AboutUs.js </h1>
            {/* <h1>About</h1> */}
            <div className='Rows'> <Row1 /></div>
            <div className='Rows'> <Row2 /></div>
            {/* <h1>This Heading is from Page AboutUs.js </h1> */}
        </div>
    );
};

export default AboutUs;

// https://github.com/briancodex/react-navbar-v3/blob/main/src/components/Navbar/index.js
