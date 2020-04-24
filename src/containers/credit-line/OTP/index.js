import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  OtpWrapper,
  OtpBox,
  HeaderInfo,
  FormLabel,
  OtpForm,
  OTPField,
  OTPFieldWrapper,
  OTPFieldBlock,
  ResetText,
  ResetTimer,
  ResetTextContainer,
  AcknowledgementBlock,
  SubmitButton
} from './style'
import { HyperLinkSpan } from '../style'
import { connect } from 'react-redux'
import {
  FS_LENDING_OTP_WAIT_TIME,
  FS_LENDING_OTP_LENGTH
} from '../../../constants'
import { requestGenerateOtp, requestAuthOtp } from './ActionCreators'

/*
 * Represent the component that renders OTP screen for FS Lending Transactions
 */
const OTP = (props) => {
  const { generateOtp, otpData, authOtp } = props
  const reqData = {
    otpMobile: '9800000000',
    source: 'TCL',
    password: 'tcl-123'
  }
  const [otp, setOtp] = useState(
    Array(FS_LENDING_OTP_LENGTH)
      .join('.')
      .split('.')
  )
  const [otpValid, setOtpValid] = useState(false)
  const otpEntered = (e) => {
    let num = Number(e.target.value)
    const id = Number(e.target.id)
    if (e.target.value === '') {
      num = ''
      setOtp([...otp].map((elem, index) => (id === index ? '' : elem)))
    }
    if (num !== '' && !isNaN(num) && e.target.value.length < 2) {
      setOtp([...otp].map((elem, index) => (id === index ? num : elem)))
      if (id < 3) document.getElementById(id + 1).focus()
      else document.getElementById(id).blur()
    }
  }
  const optFocus = (e) => {
    if (otp[e.target.id] !== '') document.getElementById(e.target.id).select()
  }
  const [timerOn, setTimerOn] = useState(true)
  const [timerTime, setTimerTime] = useState(FS_LENDING_OTP_WAIT_TIME)
  useEffect(() => {
    if (timerTime === 0) {
      setTimerOn(false)
    } else {
      setTimerOn(true)
      setTimeout(() => {
        setTimerTime(timerTime - 1)
      }, 1000)
    }
  }, [setTimerOn, timerTime])
  useEffect(() => {
    setOtpValid(!otp.every((elem) => elem !== ''))
  }, [otp, setOtpValid])
  const resendOtp = () => {
    generateOtp(reqData)
    setTimerOn(true)
    setTimerTime(FS_LENDING_OTP_WAIT_TIME)
  }
  useEffect(() => {
    generateOtp(reqData)
  }, [])
  const [enableResend, setEnableResend] = useState(true)
  const submit = () => {
    setEnableResend(false)
    authOtp({ ...otpData, otpValue: otp.join().replace(/,/g, '') })
  }
  return (
    <OtpWrapper>
      <OtpBox>
        <div>
          <HeaderInfo>
            Enter the OTP we have sent to your registerd mobile number
            {reqData.otpMobile}.
          </HeaderInfo>
        </div>
        <OtpForm>
          <div>
            <FormLabel>Enter OTP</FormLabel>
          </div>
          <OTPFieldBlock>
            {Object.keys(otp).map((elem, index) => (
              <OTPFieldWrapper key={index}>
                <OTPField
                  type='text'
                  onChange={otpEntered}
                  id={index}
                  value={otp[index]}
                  onFocus={optFocus}
                />
              </OTPFieldWrapper>
            ))}
          </OTPFieldBlock>
          {enableResend && (
            <ResetTextContainer>
              <ResetText>
                {timerOn ? (
                  'Resend OTP'
                ) : (
                  <HyperLinkSpan
                    onClick={resendOtp}
                    color='primary'
                    decoration='none'
                  >
                    Resend OTP
                  </HyperLinkSpan>
                )}{' '}
                {timerTime > 0 && (
                  <span>
                    in{' '}
                    <ResetTimer>
                      00:{timerTime < 10 ? `0${timerTime}` : timerTime}
                    </ResetTimer>
                  </span>
                )}
              </ResetText>
            </ResetTextContainer>
          )}
        </OtpForm>
        <AcknowledgementBlock>
          By proceeding, you agree to the{' '}
          <HyperLinkSpan color='primary' decoration='none'>
            T&amp;C
          </HyperLinkSpan>{' '}
          of Tata Credit Line
        </AcknowledgementBlock>
        <div>
          <SubmitButton onClick={submit} disabled={otpValid}>
            Submit
          </SubmitButton>
        </div>
      </OtpBox>
    </OtpWrapper>
  )
}

OTP.propTypes = {
  generateOtp: PropTypes.func,
  authOtp: PropTypes.func,
  otpSending: PropTypes.bool,
  otpError: PropTypes.bool,
  otpData: PropTypes.object,
  authSending: PropTypes.bool,
  authError: PropTypes.bool,
  authData: PropTypes.object
}

const mapStateToProps = (state) => {
  const {
      otp: { otpSending, otpError, otp, authSending, authError, auth }
  } = state
  return {
    otpSending,
    otpError,
    otpData: otp,
    authSending,
    authError,
    authData: auth
  }
}

const mapDispatchToProps = (dispatch) => ({
  generateOtp: (reqData) => dispatch(requestGenerateOtp(reqData)),
  authOtp: (reqData) => dispatch(requestAuthOtp(reqData))
})

export default connect(mapStateToProps, mapDispatchToProps)(OTP)
