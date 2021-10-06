import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
