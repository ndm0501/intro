import React from "react";

import Container1 from "./containers/Container1";

import Callback from "./functions/callback";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./utils/auth";
import AuthCheck from "./utils/authcheck";
const auth = new Auth();
// auth.logout();
// console.log(auth, "a");
const handleAuthentication = props => {
  // console.log(props, "ha");
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
            <Route path="/authcheck" render={() => <AuthCheck auth={auth}/>} />
            <Route
              path="/callback"
              render={props => {
                // console.log(props, "ccccbbbb");
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
