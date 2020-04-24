import { combineReducers } from "redux";
import panVerificationReducer from "./pan-details/Reducer";
import personalDetails from "./PersonalDetails/Reducer";
import onboardingForm from "./OnboardingForm/Reducer";
import otp from "./OTP/Reducer";
import limit from '../new-credit/Limit/Reducer';
import kycReducer from '../new-credit/kyc/Reducer'
import lendingProductReducer from '../Multitender/Scheme/Reducer'

const rootReducer = combineReducers({
  personalDetails,
  panVerificationReducer,
  onboardingForm,
  otp,
  limit,
  kycReducer,
  lendingProductReducer
});

export default rootReducer;
