import { combineReducers } from "redux";
import panVerificationReducer from "./pan-details/Reducer";
import personalDetails from "./PersonalDetails/Reducer";
import onboardingForm from "./OnboardingForm/Reducer";
import otp from "./OTP/Reducer";

const rootReducer = combineReducers({
  personalDetails,
  panVerificationReducer,
  onboardingForm,
  otp
});

export default rootReducer;
