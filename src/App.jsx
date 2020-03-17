import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './config/routes';

import FooterNav from './containers/FooterNav/FooterNav';

export default class App extends Component {
  render() {
    return (
      <div id="root">
        <Router>
          {routes.map(route => {
            return <Route {...route} key={route.path} />;
          })}
          <FooterNav />
        </Router>
      </div>
    );
  }
}
