import {
  SAVE_GEOLOCATION,
  SAVE_DATE_OF_BIRTH,
  SAVE_PINCODE,
  SAVE_EMPLOYMENT_TYPE
} from './ActionTypes'

const initialState = {
  geoLocation: {},
  dateOfBirth: null,
  pincode: '',
  employmentType: null
}

const personalDetails = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_GEOLOCATION:
      return {
        ...state,
        geoLocation: action.payload.geoLocation
      }
    case SAVE_DATE_OF_BIRTH:
      return {
        ...state,
        dateOfBirth: action.payload.dateOfBirth
      }
    case SAVE_PINCODE:
      return {
        ...state,
        pincode: action.payload.pincode
      }
    case SAVE_EMPLOYMENT_TYPE:
      return {
        ...state,
        employmentType: action.payload.employmentType
      }
    default:
      return state
  }
}

export default personalDetails
