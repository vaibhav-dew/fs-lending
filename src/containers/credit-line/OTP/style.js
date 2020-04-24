import styled from 'styled-components'

export const OtpWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;
  background-color: transparent;
  backdrop-filter: blur(2px);
`

export const OtpBox = styled.div`
  width: 100%;
  max-width: 464px;
  font-family: TTCommons, sans-serif;
  border-radius: 8px;
  color: #fff;
  text-align: center;
  background-color: #1e1e1e;
  padding: 40px 68px;
  @media screen and (max-width: 464px) {
    padding: 28px 32px;
  }
`

export const HeaderInfo = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #8f8f8f;
`

export const OtpForm = styled.div`
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  line-height: 30px;
`

export const FormLabel = styled.span`
  font-size: 24px;
  font-weight: 600;
`

export const OTPFieldBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const OTPFieldWrapper = styled.div`
  padding: 5px 0;
  border-bottom: 2px solid #fff;
`

export const OTPField = styled.input`
  background-color: transparent;
  text-align: center;
  border: none;
  outline: none;
  letter-spacing: 5px;
  color: #fff;
  width: 41px;
  font-weight: 600;
  font-size: 36px;
`

export const ResetTextContainer = styled.div`
  padding-top: 22px;
`

export const ResetText = styled.span`
  font-size: 14px;
`

export const ResetTimer = styled.span`
  font-weight: 600;
`

export const AcknowledgementBlock = styled.div`
  padding-top: 19px;
  padding-bottom: 40px;
  font-size: 14px;
  font-weight: normal;
  @media screen and (max-width: 500px) {
    padding-top: 15px;
    padding-bottom: 20px;
  }
`

export const SubmitButton = styled.button`
  height: 56px;
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  width: 100%;
  max-width: 299px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.disabled ? '#8f8f8f' : '#000')};
  background-color: ${(props) => (props.disabled ? '#ccc' : '#fff')};
  border-radius: 28px;
  padding: 0px 20px;
  border: 2px solid ${(props) => (props.disabled ? '#ccc' : '#fff')};
`
