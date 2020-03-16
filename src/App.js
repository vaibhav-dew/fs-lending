import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import LandingPage from "./containers/credit-line/landing-page/LandingPage";
import PanDetails from "./containers/credit-line/pan-details/PanDetails";
import ConfirmLimit from "./containers/credit-line/confirm-limit/ConfirmLimit";
import KycDetails from "./containers/credit-line/Kyc-details/KycDetails"
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
          <Route path="/credit-line/pan-details" component={PanDetails}  />
            {/* <PanDetails />
          </Route> */}
          <Route path="/credit-line/confirm-limit">
            <ConfirmLimit />
          </Route>
          <Route path="/credit-line/kyc-details" component={KycDetails}  />
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
