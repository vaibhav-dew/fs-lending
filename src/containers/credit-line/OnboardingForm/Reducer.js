import {
  SAVE_PAN_DETAILS,
  SAVE_GEOLOCATION,
  SAVE_DATE_OF_BIRTH,
  SAVE_PINCODE,
  SAVE_EMPLOYMENT_TYPE,
} from "./ActionTypes";

const initialState = {
  panDetails: {
    pan: "",
    name: "",
  },
  geolocation: { latitude: "", longitude: "" },
  dateOfBirth: "",
  pincode: "",
  employmentType: "",
};

const onboarding = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_PAN_DETAILS:
      return {
        ...state,
        panDetails: action.payload.panDetails,
      };
    case SAVE_GEOLOCATION:
      return {
        ...state,
        geoLocation: action.payload.geoLocation,
      };
    case SAVE_DATE_OF_BIRTH:
      return {
        ...state,
        dateOfBirth: action.payload.dateOfBirth,
      };
    case SAVE_PINCODE:
      return {
        ...state,
        pincode: action.payload.pincode,
      };
    case SAVE_EMPLOYMENT_TYPE:
      return {
        ...state,
        employmentType: action.payload.employmentType,
      };
    default:
      return state;
  }
};

export default onboarding;
