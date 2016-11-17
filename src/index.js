import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import createStore from './createStore';

import App from './containers/App.js';
import FirstView from './containers/FirstView.js';
import SecondView from './containers/SecondView.js';
import ThirdView from './containers/ThirdView.js';

const store = createStore();
const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRedirect to={'first'}/>
        <Route path="first" component={FirstView}/>
        <Route path="second" component={SecondView}/>
        <Route path="third" component={ThirdView}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
