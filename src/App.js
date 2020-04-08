import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import LandingPage from "./containers/credit-line/landing-page/Index";
import PanDetails from "./containers/credit-line/pan-details/Index";
import ConfirmLimit from "./containers/credit-line/confirm-limit/ConfirmLimit";
import KycDetails from "./containers/credit-line/Kyc-details/KycDetails";
import { DetailConfirmation } from "./containers/credit-line/confirm-eligibility/index";
import PersonalDetails from "./containers/credit-line/PersonalDetails";
import ActivateLimit from "./containers/credit-line/ActivateLimit";
import OnboardingForm from "./containers/credit-line/OnboardingForm";

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
        <Route path="/credit-line/confirm-limit" component={ConfirmLimit} />
        {/* <ConfirmLimit />
          </Route> */}
        <Route path="/credit-line/kyc-details" component={KycDetails} />
        <Route path="/credit-line/confirm" component={DetailConfirmation} />
        <Route
          path="/credit-line/personal-details"
          component={PersonalDetails}
        />
        <Route path="/credit-line/activate-limit" component={ActivateLimit} />
        <Route path="/credit-line/onboarding-form" component={OnboardingForm} />
      </Switch>
    </Router>
  );
};

export default App;
