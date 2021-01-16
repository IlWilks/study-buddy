import React, { Fragment, } from 'react';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Login from './components/Login';
import ConnectedRegister from './components/Register';
import NavBar from "./components/NavBar";
import MyGroups from "./components/MyGroups";
import GroupShow from './components/GroupShow';
import Landing from './components/Landing';
import Channel from "./components/Channel";
import FetchUser from './components/FetchUser'

const App = () => (
  <Fragment>
    <NavBar />
    <FetchUser>
    <Container>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={ConnectedRegister} />
        <Route exact path="/:id" component={GroupShow}/>
        <Route exact path="/mygroups" component={MyGroups} />
        <Route exact path='/channel/:id' component={Channel} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Container>
    </FetchUser>
  </Fragment>
)

export default App;
