import { combineReducers } from "redux";
import panVerificationReducer from "./pan-details/Reducer";
import personalDetails from "./PersonalDetails/Reducer";
import onboardingForm from "./OnboardingForm/Reducer";

const rootReducer = combineReducers({
  personalDetails,
  panVerificationReducer,
  onboardingForm,
});

export default rootReducer;
