import React from 'react';
import Row1 from "../Rows/Row1"
import Row2 from '../Rows/Row2.js';


const OurProducts = () => {
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
            }}        >

            <h1 style={{ color: 'red' }}>Our Products PAGE.<br /> </h1>
            <div className='Rows'> <Row1 /></div>
            <div className='Rows'> <Row2 /></div>


        </div >

    );
};

export default OurProducts;

//https://github.com/briancodex/react-navbar-v3/blob/main/src/components/Navbar/index.js