import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Coins from "../Screens/Coins";
import Exchanges from "../Screens/Exchanges";
import Prices from "../Screens/Prices";
import CoinsDetail from "../Screens/CoinsDetail";

export default () => {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Prices} />
      <Route path="/exchanges" component={Exchanges} />
      <Route exact path="/coins" component={Coins} />
      <Route path="/coins/:id" component={CoinsDetail} />
    </Router>
  );
};
