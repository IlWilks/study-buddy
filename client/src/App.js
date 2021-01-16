import React, { Fragment, } from 'react';

import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Landing from './components/Landing';

import Login from './components/Login';
import ConnectedRegister from './components/Register';

import Navbar from "./components/Navbar";
import MyGroups from "./components/MyGroups";

const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Landing} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={ConnectedRegister} />

        <Route exact path="/mygroups" component={MyGroups} />
     

        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Container>
  </Fragment>
)

export default App;