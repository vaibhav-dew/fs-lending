import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import LandingPage from "./containers/credit-line/landing-page/Index";
import PanDetails from "./containers/credit-line/pan-details/Index";
import KycDetails from "./containers/credit-line/Kyc-details/KycDetails";
import { DetailConfirmation } from "./containers/credit-line/confirm-eligibility/index";
import PersonalDetails from "./containers/credit-line/PersonalDetails";
import Details from "./containers/credit-line/confirm-eligibility/Details";
import ActivateLimit from "./containers/credit-line/Activate-limit";
import NewKyc from "./containers/new-credit/kyc";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/credit-line/" component={LandingPage} />
        {/* <LandingPage />
          </Route> */}
        <Route path="/credit-line/pan-details" component={PanDetails} />
        {/* <PanDetails />
          </Route> */}
        {/* <ConfirmLimit />
          </Route> */}
        <Route path="/credit-line/kyc-details" component={KycDetails} />
        <Route path="/credit-line/confirm" component={DetailConfirmation} />
        <Route
          path="/credit-line/personal-details"
          component={PersonalDetails}
        />
        <Route
          path="/credit-line/details"
          component={Details}
        />
        <Route
          path="/credit-line/activate-limit"
          component={ActivateLimit}
        />
        <Route
          path="/kycdetails"
          component={NewKyc}
        />
      </Switch>
    </Router>
  );
};

export default App;
