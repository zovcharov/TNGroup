import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';

import LoginPage from './pages/LoginPage/LoginPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';

import Wrapper from "./components/Wrapper/Wrapper";

const defaultState = {
    projects: [],
    projectsDataState: 'pending',
    singleProject: {},
    singleProjectDataState: 'pending',
    
};

const store = createStore(rootReducer, defaultState);

import './main.scss'
import DashboardPage from "./pages/DashboardPage/DashboardPage";

const Routs = () => (
    <HashRouter>
        <Switch>
        <Route path='/login' component={LoginPage}/>
          <Wrapper>
            <Route path='/project/:projectId' component={ProjectPage}/>
            <Route exact path='/projects' component={ProjectsPage}/>
            <Route exact path='/' component={DashboardPage}/>
          </Wrapper>
        </Switch>
    </HashRouter>
);

ReactDOM.render((
    <Provider store={store}>
        <React.Fragment>
            <Routs />
        </React.Fragment>
    </Provider>
), document.getElementById("root"));
