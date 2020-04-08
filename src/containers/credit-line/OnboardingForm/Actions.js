import {
  SAVE_PAN_DETAILS,
  SAVE_GEOLOCATION,
  SAVE_DATE_OF_BIRTH,
  SAVE_PINCODE,
  SAVE_EMPLOYMENT_TYPE,
} from "./ActionTypes";

export const savePanDetails = (panDetails) => ({
  type: SAVE_PAN_DETAILS,
  payload: { panDetails },
});

export const saveGeolocation = ({ latitude, longitude }) => ({
  type: SAVE_GEOLOCATION,
  payload: { geoLocation: { latitude, longitude } },
});

export const saveDateOfBirth = (dateOfBirth) => ({
  type: SAVE_DATE_OF_BIRTH,
  payload: { dateOfBirth },
});

export const savePincode = (pincode) => ({
  type: SAVE_PINCODE,
  payload: { pincode },
});

export const saveEmploymentType = (employmentType) => ({
  type: SAVE_EMPLOYMENT_TYPE,
  payload: { employmentType },
});
