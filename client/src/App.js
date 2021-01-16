import React, { Fragment, } from 'react';

import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Landing from './components/Landing';
import Navbar from "./components/Navbar";
import MyGroups from "./components/MyGroups";
const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/mygroups" component={MyGroups} />
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/register" component={Register} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Container>
  </Fragment>
)

export default App;