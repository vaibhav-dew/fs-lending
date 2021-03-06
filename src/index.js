import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import panVerificationReducer from "./containers/credit-line/pan-details/Reducer";
import personalDetails from "./containers/credit-line/PersonalDetails/Reducer"
import onboarding from "./containers/credit-line/OnboardingForm/Reducer"
import otp from "./containers/credit-line/OTP/Reducer"
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers } from 'redux'
import limit from './containers/new-credit/Limit/Reducer'
import kycReducer from './containers/new-credit/kyc/Reducer'
import lendingProductReducer from './containers/Multitender/Scheme/Reducer'
const rootReducer = combineReducers({
  panVerificationReducer,
  personalDetails,
  onboarding,
  otp,
  limit,
  kycReducer,
  lendingProductReducer
})

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
