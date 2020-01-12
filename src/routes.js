import React from "react";

import Container1 from "./containers/Container1";

import Callback from "./functions/callback";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./utils/auth";

const auth = new Auth();

const handleAuthentication = props => {
  if (props.location.hash) {
    auth.handleAuth();
  }
};

class Routes extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Container1 auth={auth} />} />
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props);
                return <Callback />;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default Routes;
