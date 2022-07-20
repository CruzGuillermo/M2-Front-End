import React from "react";
import { Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import UserPosts from "./components/UserPosts/UserPosts";
import Users from "./components/Users/Users";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/filter/posts"></Route>

        <Route path="/"> <Users /></Route>

        <Route path="/users/:id/posts">
          <UserPosts />
        </Route>

        <Route path="/user/:userid/post/:id/coments"></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
