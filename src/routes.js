import React from 'react';
import { Route, Switch } from 'react-router';

import Main from './pages/Main/Main';

export default (
  <Switch>
    <Route exact path="/" component={Main}/>
    <Route path="#" component={null}/>
    <Route path="#" component={null}/>
  </Switch>
);