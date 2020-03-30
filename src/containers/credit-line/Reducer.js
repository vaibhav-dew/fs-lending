import { combineReducers } from "redux";
import panVerificationReducer from "./pan-details/Reducer";
import personalDetails from "./PersonalDetails/Reducer";

const rootReducer = combineReducers({
  personalDetails,
  panVerificationReducer
});

export default rootReducer;
