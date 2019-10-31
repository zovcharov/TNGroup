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
import ProjectRisksPage from './pages/ProjectRisksPage/ProjectRisksPage';
import ProjectTasksPage from './pages/ProjectTasksPage/ProjectTasksPage';

import Wrapper from "./components/Wrapper/Wrapper";

import './main.scss'
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import TaskPage from "./pages/TaskPage/TaskPage";

const defaultState = {
    projects: [],
    projectsDataState: 'pending',
    users: [],
    usersDataState: 'pending',
    singleProject: {},
    singleProjectDataState: 'pending',
    tasks: [],
    tasksDataStatus: 'pending',
    tasksProjectId: 0,
    schedules: [],
    schedulesDataStatus: 'pending',
    userAgreements: [],
    userAgreementsDataStatus: 'pending',
    agreements: [],
    agreementsDataStatus: 'pending',
    agreementsProjectId: 0,
    unplannedRisks: [],
    plannedRisks: [],
    risksDataStatus: 'pending',
    risksProjectId: 0,
    lastProjectTasksDataStatus: 'pending',
    lastProjectTasks: [],
    lastAgreementsDataStatus: 'pending',
    lastAgreements: [],
    singleTask: {},
    singleTaskDataState: 'pending',
};

const store = createStore(rootReducer, defaultState);

const Routs = () => (
    <HashRouter>
        <Switch>
        <Route path='/login' component={LoginPage}/>
          <Wrapper>
              <Route exact path='/agreements/:projectId' component={ProjectAgreementsPage} />
              <Route exact path='/risks/:projectId' component={ProjectRisksPage} />
              <Route exact path='/tasks/:projectId' component={ProjectTasksPage} />
              <Route exact path='/project/:projectId' component={ProjectPage} />
              <Route exact path='/projects' component={ProjectsPage} />
              <Route exact path='/' component={DashboardPage} />
              <Route exact path='/task' component={TaskPage} />
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
