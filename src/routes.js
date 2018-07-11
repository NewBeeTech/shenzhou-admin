/*
 * @flow
 */
import React from 'react';

import { Route, IndexRoute } from 'react-router';

import * as RoutingURL from './core/RoutingURL/RoutingURL';
import RootContainer from './container/RootContainer';
import LoginContainer from './container/LoginContainer';
import AppContainer from './container/AppContainer';
import SupportList from './components/SupportList';
import DynamicList from './components/DynamicList';
import DynamicInfo from './components/DynamicInfo';

const routes = (
  <Route path={RoutingURL.PrefixURL()} component={RootContainer} >
    <Route path={RoutingURL.Login()} component={LoginContainer} />
    <Route path={RoutingURL.App()} component={AppContainer} >
      <IndexRoute component={SupportList} />
      <Route path={RoutingURL.SupportList()} component={SupportList} />
      <Route path={RoutingURL.DynamicList()} component={DynamicList} />
      <Route path={RoutingURL.DynamicInfo('(:id)')} component={DynamicInfo} />
    </Route>
  </Route>
);

export default routes;
