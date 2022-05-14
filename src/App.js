import { Fragment, useState } from "react";
// import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

// component
import Dashboard from "./Component/Dashboard";
import Login from "./Component/Login";
import Register from "./Component/Register";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const setAuth = (boolean) => {
    setIsAuth(boolean);
  };

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
            {isAuth ? (
              <>
                <Route
                  exact
                  path="/"
                  render={(props) => <Dashboard {...props} setAuth={setAuth} />}
                />
              </>
            ) : (
              <>
                <Route
                  exact
                  path="/"
                  render={(props) => <Login {...props} setAuth={setAuth} />}
                />
                <Route
                  exact
                  path="/register"
                  render={(props) => <Register {...props} setAuth={setAuth} />}
                />
              </>
            )}
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
