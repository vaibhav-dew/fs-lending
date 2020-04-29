import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height:auto;
  min-height: ${props => (props.value === 'document' ? '947px' : '760px')};
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  background-color: #1e1e1e;
  z-index:999;
`
export const ContentHead = styled.p`
width: auto;
min-height: 20px;
max-height:auto;
font-size: 18px;
font-weight: 600;
line-height: 1.11;
color: #ffffff;
margin: 24px 0 0 16px;
`
export const ContentSubHead = styled.p`
    width: auto;
    min-height: 20px;
    max-height:auto;
    font-size: 16px;
    line-height: 1.25;
    color: rgba(255, 255, 255, 0.48);
    margin: 17px 0 0 16px;
`
export const OptionContainer = styled.div`
display:flex;
`
export const OptionValue = styled.h1`
  width:auto;
  min-height: 22px;
  max-height:auto;
  font-size: 18px;
  line-height: 1.22;
  color: #ffffff;
  margin: 16px 0 0 10px;
`
export const OptionSubValue = styled.p`
 width:auto;
  min-height: 20px;
  max-height:auto;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.43;
  color: rgba(255, 255, 255, 0.5);
  margin: 3px 0 0 49px;
`
export const InstructionContainer = styled.div`
margin:16px 16px 0px 49px;
`
export const InstructionsHeader = styled.p`
width: 295px;
height: 60px;
font-size: 16px;
font-weight: normal;
font-stretch: normal;
font-style: normal;
line-height: 1.25;
letter-spacing: normal;
color: rgba(255, 255, 255, 0.48);
margin:0px;
`

export const Instructions = styled.h1`
  width: 89px;
  height: 24px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  color: #ffffff;
  margin:24px 0 0 0 ;
  `
export const InstructionContentContainer = styled.div`
    display:flex;
    margin: 5px 0 0 0;
  `
export const Steper = styled.div`
        border-radius:50%;
        border:1px solid #ccc;
        color:#333;
        line-height:25px;
        width: 16px;
        height: 16px;
        opacity: 0.48;
        background-color: #ffffff;
        font-size:12px;
        margin-top:5px;
        `
export const StepContent = styled.p`
  height: 12px;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  color: #000000;
  text-align: center;
  line-height: 17px;
  margin:0px;
`
export const InstructionContent = styled.p`
  width: 275px;
  height: 27px;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.69;
  color: #ffffff;
  margin:1px 0 0 9px;
  `
export const Button = styled.button`
width: 380px;
  height: 72px;
  background-color: #ffffff;
  bottom: 0;
    position: absolute;
    outline:none;

`
export const ButtonContent = styled.p`
width: 380px;
  height: 24px;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  text-align: center;
  color: #1e1e1e;
`
export const LinkContent = styled.p`
  width: 319px;
  height: 22px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.57;
  text-align: center;
  color: #ffffff;
  margin: 60px 21px 0 20px;
`
