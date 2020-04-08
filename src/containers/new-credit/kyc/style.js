import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: ${props => (props.value === 'document' ? '947px' : '760px')};
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  background-color: #1e1e1e;

`
export const Navbar = styled.div`
  width: 360px;
  height: 79px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.3);
  background-color: #171717;
`
export const NavbarRoute = styled.h2`
 width: 24px;
  height: 24px;
  color:white;
  margin:16px 0 0px 16px;
  `
export const NavbarHead = styled.h1`
width: 143px;
  height: 24px;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #ffffff;
  margin: 15px 0 0 0;
  padding-left:8px;
`
export const NavbarSubHead = styled.p`
  width: 57px;
  height: 22px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.38;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin: 0 0 0 48px;
`
export const ContentHead = styled.p`
width: 205px;
height: 20px;
font-size: 18px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: 1.11;
letter-spacing: normal;
color: #ffffff;
margin: 24px 0 0 16px;
`
export const ContentSubHead = styled.p`
    width: 210px;
    height: 20px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: normal;
    color: rgba(255, 255, 255, 0.48);
    margin: 17px 0 0 16px;
`

export const Input = styled.input`
 width: 20px;
  height: 20px;
  /* background-color: #a990d0; */
  margin:16px 0 0 16px;
  outline:none;
  &:checked {
    background-color: #a990d0;
  }
  `
export const OptionContainer = styled.div`
display:flex;
`
export const OptionValue = styled.h1`
  width: ${props => (props.value === 'aadhar' ? '70px' : '140px')};
  height: 22px;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  color: #ffffff;
  margin: 16px 0 0 10px;
`
export const OptionSubValue = styled.p`
 width: ${props => (props.value = 'aadhar' ? '145px' : '90px')};
  height: 20px;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
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
  font-family: TTCommons;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
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
export const StepContent = styled.div`
  height: 12px;
  font-family: TTCommons;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  text-align: center;
  line-height: 17px;
`
export const InstructionContent = styled.p`
  width: 275px;
  height: 27px;
  font-family: TTCommons;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.69;
  letter-spacing: normal;
  color: #ffffff;
  margin:1px 0 0 9px;
  `
export const Button = styled.button`
width: 360px;
  height: 72px;
  background-color: #ffffff;
  bottom: 0;
    position: absolute;
    outline:none;
`
export const ButtonContent = styled.div`
width: 360px;
  height: 24px;
  font-family: TTCommons;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #1e1e1e;
`
export const LinkContent = styled.div`
  width: 319px;
  height: 22px;
  font-family: TTCommons;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin: 60px 21px 0 20px;
`
