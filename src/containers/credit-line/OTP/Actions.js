import {
  GENERATE_OTP,
  GENERATE_OTP_FAILED,
  GENERATE_OTP_SUCCESS,
  AUTH_OTP,
  AUTH_OTP_SUCCESS,
  AUTH_OTP_FAILED
} from './ActionTypes'

export const generateOtp = () => ({
  type: GENERATE_OTP
})

export const generateOtpSuccess = (data) => ({
  type: GENERATE_OTP_SUCCESS,
  payload: data
})

export const generateOtpFailed = (err) => ({
  type: GENERATE_OTP_FAILED,
  payload: err
})

export const authOtp = () => ({
  type: AUTH_OTP
})

export const authOtpSuccess = (data) => ({
  type: AUTH_OTP_SUCCESS,
  payload: data
})

export const authOtpFailed = (err) => ({
  type: AUTH_OTP_FAILED,
  payload: err
})
