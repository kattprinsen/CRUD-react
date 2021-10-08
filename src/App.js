import React from 'react';
import './App.css';

import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Devices from './components/Devices';
import Sites  from './components/Sites';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/sites"} className="nav-link">
              Sites
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/devices"} className="nav-link">
              Devices
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/users"} className="nav-link">
              Users
            </Link>
          </li>
        </div>
      </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/sites"]} component={Sites} />
            <Route exact path="/users" component={Users} />
            <Route exact path="/devices" component={Devices} />
            <Route path="/devices/:id" component={Devices} />
          </Switch>
        </div>
    </div>
  );
}

export default App;
