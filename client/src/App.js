import React, { Fragment } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import Campaign from "./components/dashboard/Campaign";
import Landing from "./components/layouts/Landing";
import { PersistGate } from "redux-persist/lib/integration/react";
import PrivateRoute from "./components/routes/PrivateRoute";
import _404 from "./components/layouts/_404";
import "./App.css";
import "./Layout.css";

const App = () =>
  <Provider store = { store }>
    <PersistGate loading = {null} persistor = { persistor }>
      <Router>
      <Fragment>
        <div className="wrapper">
          <div className = "container">
            <Switch>
              <Route exact path = "/" component = { Landing } />
              <PrivateRoute exact path = "/campaign" component = { Campaign } />
              <Route component = { _404 } />
            </Switch>
          </div>
        </div>
      </Fragment>
      </Router>
    </PersistGate>
  </Provider>

export default App;
