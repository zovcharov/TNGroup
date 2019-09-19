import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

import Footer from './components/Footer/Footer'

const Routs = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={LoginPage}/>
            <Route exact path='/projects' component={ProjectsPage}/>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render((
    <React.Fragment>
        <Routs />
        <Footer />
    </React.Fragment>
), document.getElementById("root"));
