import { combineReducers } from "redux";
import panVerificationReducer from "./pan-details/Reducer";
import personalDetails from "./PersonalDetails/Reducer";
import onboardingForm from "./OnboardingForm/Reducer";
import limit from '../new-credit/Limit/Reducer'

const rootReducer = combineReducers({
  personalDetails,
  panVerificationReducer,
  onboardingForm,
  limit
});

export default rootReducer;
