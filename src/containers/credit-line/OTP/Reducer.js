import {
  GENERATE_OTP,
  GENERATE_OTP_FAILED,
  GENERATE_OTP_SUCCESS,
  AUTH_OTP,
  AUTH_OTP_SUCCESS,
  AUTH_OTP_FAILED
} from './ActionTypes'

const initialState = {
  otpSending: false,
  otpError: false,
  otp: {},
  authSending: false,
  authError: false,
  auth: {}
}

const otp = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_OTP:
      return { ...state, otpSending: true, otpError: false }
    case GENERATE_OTP_SUCCESS:
      return {
        ...state,
        otpSending: false,
        otpError: false,
        otp: action.payload
      }
    case GENERATE_OTP_FAILED:
      return {
        ...state,
        otpSending: false,
        otpError: true,
        otp: action.payload
      }
    case AUTH_OTP:
      return { ...state, authSending: true, authError: false }
    case AUTH_OTP_SUCCESS:
      return {
        ...state,
        authSending: false,
        authError: false,
        auth: action.payload
      }
    case AUTH_OTP_FAILED:
      return {
        ...state,
        authSending: false,
        authError: true,
        auth: action.payload
      }
    default:
      return state
  }
}

export default otp
