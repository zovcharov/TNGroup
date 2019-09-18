import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';

import Footer from './components/Footer/Footer'

const Routs = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={LoginPage}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render((
    <React.Fragment>
        <Routs />
        <Footer />
    </React.Fragment>
), document.getElementById("root"));
