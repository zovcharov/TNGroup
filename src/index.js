import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage/LoginPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';

import Footer from './components/Footer/Footer'
import Wrapper from "./components/Wrapper/Wrapper";

import './main.scss'
import DashboardPage from "./pages/DashboardPage/DashboardPage";

const Routs = () => (
    <BrowserRouter>
        <Switch>
          <Wrapper>
            <Route path='/login' component={LoginPage}/>
            <Route path='/projects' component={ProjectsPage}/>
            <Route exact path='/' component={DashboardPage}/>
          </Wrapper>
        </Switch>
    </BrowserRouter>
);

ReactDOM.render((
    <React.Fragment>
        <Routs />
        <Footer />
    </React.Fragment>
), document.getElementById("root"));
