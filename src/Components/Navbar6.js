import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";

const navbar6 = () => {
    return (
        <div>
            {/* <Navbar> */}

            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Services6">Services6</Link>
            </li>
            <li>
                <Link to="/AboutUs6">AboutUs6</Link>
            </li>
            {/* <li>
                <Link to="/goats">Goats</Link>
            </li> */}
            {/* </Navbar/> */}
        </div>
    );
}
export default navbar6;
