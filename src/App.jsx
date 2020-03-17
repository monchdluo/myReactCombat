import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './config/routes';

import FooterNav from './containers/FooterNav/FooterNav';
=======
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/home'
import Login from './components/login/login'
>>>>>>> fdc3e67d3ebf95b0df656e413e88cb93faeb6be2

export default class App extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div id="root">
        <Router>
          {routes.map(route => {
            return <Route {...route} key={route.path} />;
          })}
          <FooterNav />
        </Router>
      </div>
=======
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </Router>
>>>>>>> fdc3e67d3ebf95b0df656e413e88cb93faeb6be2
    );
  }
}
