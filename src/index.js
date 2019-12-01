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
import PlansPage from './pages/PlansPage/PlansPage';

import DashboardPage from "./pages/DashboardPage/DashboardPage";
import TaskPage from "./pages/TaskPage/TaskPage";
import Wrapper from "./components/Wrapper/Wrapper";

import { DEFAULT_STORE } from './redux/defaultStore';

import './main.scss'
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const store = createStore(rootReducer, DEFAULT_STORE);


const Routs = () => (
    <HashRouter>
        <Switch>
        <Route path='/login' component={LoginPage}/>
          <Wrapper>
              <Route exact path='/agreements/:projectId' component={ProjectAgreementsPage} />
              <Route exact path='/risks/:projectId' component={ProjectRisksPage} />
              <Route exact path='/tasks/:projectId' component={ProjectTasksPage} />
              <Route exact path='/plans/:projectId' component={PlansPage} />
              <Route exact path='/project/:projectId' component={ProjectPage} />
              <Route exact path='/projects' component={ProjectsPage} />
              <Route exact path='/' component={DashboardPage} />
              <Route exact path='/task/:taskId' component={TaskPage} />
              <Route exact path='/profile' component={ProfilePage} />
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
