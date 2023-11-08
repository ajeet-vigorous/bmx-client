import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { withRouter } from 'react-router';
import Layout from "./Layout";

import Login from "../pages/login";
// import NetworkDetector from '../components/Hoc/NetworkDetector';

function App() {
  // global
  //var { isAuthenticated } = useUserState();

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="app/dashboard" />}
        />
        <PrivateRoute path="/app" component={withRouter(Layout)} />
        <PublicRoute path="/login" component={withRouter(Login)} />
      </Switch>
    </HashRouter>
  );

  // #######################################################################

  function PrivateRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          localStorage.getItem('spuser') ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRoute({ component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          false ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }
}
export default App;