import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';

import LoginPage from './pages/LoginPage/LoginPage';
import ProjectsPage from './pages/ProjectsPage/ProjectsPage';
import ProjectPage from './pages/ProjectPage/ProjectPage';
import ProjectAgreementsPage from './pages/ProjectAgreementsPage/ProjectAgreementsPage';

import Wrapper from "./components/Wrapper/Wrapper";

const defaultState = {
    projects: [],
    projectsDataState: 'pending',
    users: [],
    usersDataState: 'pending',
    singleProject: {},
    singleProjectDataState: 'pending',
    tasks: [],
    tasksDataStatus: 'pending',
    schedules: [],
    schedulesDataStatus: 'pending',
    userAgreements: [],
    userAgreementsDataStatus: 'pending',
    agreements: [],
    agreementsDataStatus: 'pending',
    agreementsProjectId: 0,
};

const store = createStore(rootReducer, defaultState);

import './main.scss'
import DashboardPage from "./pages/DashboardPage/DashboardPage";

const Routs = () => (
    <HashRouter>
        <Switch>
        <Route path='/login' component={LoginPage}/>
          <Wrapper>
              <Route exact path='/agreements/:projectId' component={ProjectAgreementsPage}/>
              <Route path='/project/:projectId/tasks' component={ProjectPage}/>
              <Route path='/project/:projectId/risks' component={ProjectPage}/>
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
