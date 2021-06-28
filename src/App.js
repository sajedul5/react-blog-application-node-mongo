/* eslint-disable no-unused-vars */
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Settings from "./pages/settings/Setting";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {

  const currentUser = false;

  return (
    <Router>
      <TopBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">
          {currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {currentUser ? <Home /> : <Login />}
        </Route>
        <Route path="/write">
         {currentUser ? <Write /> : <Login />}
        </Route>
        <Route path="/settings">
         {currentUser ? <Settings /> : <Login />}
        </Route>
        <Route path="/post/:postId">
          <Single />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
