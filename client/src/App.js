import React, { Fragment, } from 'react';

import { Switch, Route, } from 'react-router-dom';
import { Container, } from "semantic-ui-react";
import Landing from './components/Landing';

const App = () => (
  <Fragment>
    <Container>
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route exact path="/login" component={Login} /> */}
        {/* <Route exact path="/register" component={Register} /> */}
        {/* <Route component={NoMatch} /> */}
      </Switch>
    </Container>
  </Fragment>
)

export default App;