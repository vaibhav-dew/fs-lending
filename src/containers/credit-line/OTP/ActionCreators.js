import {
  generateOtp,
  generateOtpSuccess,
  generateOtpFailed,
  authOtp,
  authOtpSuccess,
  authOtpFailed
} from './Actions'
import axios from 'axios'
import {
  FS_LENDING_GENERATE_OTP_URL,
  FS_LENDING_AUTHENTICATE_OTP_URL
} from '../../../constants'

export const requestGenerateOtp = (reqData) => (dispatch) => {
  dispatch(generateOtp())
  return axios
    .post(FS_LENDING_GENERATE_OTP_URL, reqData)
    .then((res) => dispatch(generateOtpSuccess(res)))
    .catch((err) => dispatch(generateOtpFailed(err)))
}

export const requestAuthOtp = (reqData) => (dispatch) => {
  dispatch(authOtp())
  return axios
    .post(FS_LENDING_AUTHENTICATE_OTP_URL, reqData)
    .then((res) => dispatch(authOtpSuccess(res)))
    .catch((err) => dispatch(authOtpFailed(err)))
}
