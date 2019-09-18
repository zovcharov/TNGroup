import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from "./pages/Main/Main";
import Home from "./components/Home/Home";
import About from "./components/About/About";

ReactDOM.render((
    <BrowserRouter>
        <Main />
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
        </Switch>
    </BrowserRouter>
), document.getElementById("root"));