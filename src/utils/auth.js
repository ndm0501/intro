import auth0 from "auth0-js";
import history from "./history";
class Auth {
  auth = new auth0.WebAuth({
    domain: "ndm0501.eu.auth0.com",
    clientID: "HiauipbPC94k7YtF9k8GU7H6yyJY5HTc",
    redirectUri: "http://localhost:3000/callback",
    responseType: "token id_token",
    scope: "openid profile email"
  });

  login = () => {
    this.auth.authorize();
  };
  handleAuth = () => {
    this.auth.parseHash((err, authResult) => {
      // console.log(authResult, err);
      if (authResult) {
        localStorage.setItem("access_token", authResult.accessToken);
        localStorage.setItem("id_token", authResult.id_token);

        let expiresAt = JSON.stringify(
          authResult.expiresIn * 1000 + new Date().getTime()
        );
        localStorage.setItem("expiresAt", expiresAt);
        setTimeout(() => history.replace("/authcheck"), 200);
      } else {
        console.log(err);
      }
    });
  };
  logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("id_token");
    localStorage.removeItem("expiresAt");
  };
  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem("expiresAt"));
    return new Date().getTime() < expiresAt;
  };
}
export default Auth;
