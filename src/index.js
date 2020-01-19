import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Switch, Route } from 'react-router-dom';
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
import AllUserPlansPage from './pages/AllUserPlansPage/AllUserPlansPage';
import AllUserRisksPage from './pages/AllUserRisksPage/AllUserRisksPage';
import AllUserAgreementsPage from './pages/AllUserAgreementsPage/AllUserAgreementsPage';
import AllUserReports from './pages/AllUserReports/AllUserReports';
import PlannedRiskPage from './pages/PlannedRiskPage/PlannedRiskPage';
import NotFound from './pages/NotFound/NotFound';

import DashboardPage from './pages/DashboardPage/DashboardPage';
import TaskPage from './pages/TaskPage/TaskPage';
import Wrapper from './components/Wrapper/Wrapper';

import { DEFAULT_STORE } from './redux/defaultStore';

import './main.scss';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import UserDocumentsPage from './pages/UserDocumentsPage/UserDocumentsPage';

const store = createStore(rootReducer, DEFAULT_STORE);


const Routs = () => (
    <HashRouter>
        <Switch>
            <Route path="/login" component={LoginPage} />
            <Wrapper>
                <Route exact path="/agreements/:projectId" component={ProjectAgreementsPage} />
                <Route exact path="/risks/:projectId" component={ProjectRisksPage} />
                <Route exact path="/tasks/:projectId" component={ProjectTasksPage} />
                <Route exact path="/plans/:projectId" component={PlansPage} />
                <Route exact path="/project/:projectId" component={ProjectPage} />
                <Route exact path="/plannedrisk/:riskId" component={PlannedRiskPage} />
                <Route exact path="/projects" component={ProjectsPage} />
                <Route exact path="/task/:taskId" component={TaskPage} />
                <Route exact path="/userplans" component={AllUserPlansPage} />
                <Route exact path="/userrisks" component={AllUserRisksPage} />
                <Route exact path="/useragreements" component={AllUserAgreementsPage} />
                <Route exact path="/userreports" component={AllUserReports} />
                <Route exact path="/profile" component={ProfilePage} />
                <Route exact path="/documents" component={UserDocumentsPage} />
                <Route exact path="/notfound" component={NotFound} />
                <Route exact path="/" component={DashboardPage} />
            </Wrapper>
        </Switch>
    </HashRouter>
);

ReactDOM.render((
    <Provider store={store}>
        <>
            <Routs />
        </>
    </Provider>
), document.getElementById('root'));
