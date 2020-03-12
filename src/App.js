import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import LandingPage from "./containers/credit-line/landing-page/LandingPage";
import PanDetails from "./containers/credit-line/pan-details/PanDetails";
import ConfirmLimit from "./containers/credit-line/confirm-limit/ConfirmLimit";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/credit-line/">
            <LandingPage />
          </Route>
          <Route path="/credit-line/pan-details">
            <PanDetails />
          </Route>
          <Route path="/credit-line/confirm-limit">
            <ConfirmLimit />
          </Route>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
