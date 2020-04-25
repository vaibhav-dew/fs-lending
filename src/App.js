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
import NewKyc from "./containers/new-credit/kyc";
import Limit from "./containers/new-credit/Limit";
import TestingComponent from './TestingPratice/index'
// import Tata from "./containers/new-credit/dummy-tata-capital";
import OTP from "./containers/credit-line/OTP";
import Scheme from './containers/Multitender/Scheme/index'
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
        <Route
          path="/kycdetails"
          component={NewKyc}
        />
        <Route
          path="/limit"
          component={Limit}
        />
        <Route
          path='/testingcomponent'
          component={TestingComponent}
        />
        {/* <Route
          path='/tatacapital'
          component={Tata}
        /> */}

        <Route
          path='/schemeselection'
          component={Scheme}
        />
        <Route
          path='/otp'
          component={OTP}
        />
      </Switch>
    </Router>
  );
};

export default App;
