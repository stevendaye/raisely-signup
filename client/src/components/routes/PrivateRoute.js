import React from "react";
import { Redirect } from "react-router-dom";
import { Route } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = ({ component: Component, auth: { isAuthenticated, token }, ...rest }) => (
  <Route
    { ...rest }
    render = { props =>
      !isAuthenticated && !token ? (
        <Redirect to = "/" />
      ) : (
        <Component { ...props } />
      )
    }
  />
);

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.authState
});

const ConnectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);

export default ConnectedPrivateRoute;
