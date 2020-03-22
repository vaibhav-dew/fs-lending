import styled from 'styled-components'

export const Container = styled.div`
  margin: auto;
  font-style: sans-serif;
  display: block;
  width:90%;
`
export const Header = styled.h2`
  margin: 25px 0 10px 0;
  font-size: 20px;
  text-align: center;
`
export const StepHeader = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
`
export const Details = styled.h1`
  margin: 45px 0 10px 0;
  font-size: 18px;
  text-align: center;
  font-weight: normal;
`

export const Input = styled.input`
  height: 35px;
  width: 100%;
  font-size: 20px;
  outline: none;
  border: none;
  border-bottom: 1px solid #000000;
  display: block;
  margin-top: 50px;  
  color: #f00;
  ::placeholder {
    color: black;
    opacity: 0.4;
    font-size: 16px;
  }
`
export const Button = styled.button`
  outline: none;
  border: none;
  margin-top: 50px;
  border-radius: 10px;
  width: 100%;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
`

export const PanValidation = styled.span`
  font-size: 16px;
  color: red;
`
