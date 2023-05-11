import React from 'react';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { NavBar } from './Components/Navbar4';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/Home" component={Home} />
                <Route exact path="/">
                    <Redirect to="/Home" />
                </Route>
                <Route exact path="/About" component={About} />
            </Switch>
        </div>
    );
};