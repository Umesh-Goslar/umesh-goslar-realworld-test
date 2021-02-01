import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Comments from "./pages/Comments";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-2" style={{ marginTop: 10 }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/comments">
            <Comments />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
