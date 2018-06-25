import store from './store';
import routes from './routes';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { hashHistory, browserHistory, Router } from 'react-router';

const history = hashHistory;

const rootElement = document.getElementById('app');

export function AppRegistry() {
  render(
    <Provider store={store}>
      {/* Your root Component */}
      <Router history={history}>
        {routes}
      </Router>
    </Provider>,
    rootElement
  );
}
