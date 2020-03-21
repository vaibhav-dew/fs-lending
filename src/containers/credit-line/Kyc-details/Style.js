import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 120vh;
  font-family: sans-serif;
`;
export const Horizontal = styled.hr`
  margin: 15px -8px;
  opacity: 0.1;
`;
export const Header = styled.h2`
  margin: 25px 0 10px 0;
  font-size: 20px;
  text-align: center;
`;
export const StepHeader = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
`;
export const Details = styled.h1`
  width: 70%;
  margin: 45px 0 15px 55px;
  font-size: 18px;
  text-align: center;
  font-weight: normal;
`;
export const OptionContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
  width: 90%;
  margin: 0px 0 0 5%;
  height: 80px;
  display: block;
`;
export const OptionWrapper = styled.div`
  display: flex;
`;
export const Option = styled.input`
  width: 20px;
  height: 40px;
  margin: 0 10px;
  outline: none;
  &:checked {
  }
`;
export const OptionValue = styled.h2`
  margin: 10px 0 0 0;
  font-size: 18px;
  font-weight: normal;
`;
export const OptionSubValue = styled.p`
  font-size: 13px;
  margin: -5px 0px 10px 40px;
  opacity: 0.8;
`;

export const InstructionContainer = styled.div`
  margin-left: 20px;
  font-size: 15px;
`;
export const Instructions = styled.div`
  opacity: 0.6;
`;

export const InstructionsHeader = styled.span`
  font-weight: bold;
`;
export const InstructionContent = styled.span``;

export const ProceedButton = styled.button`
  outline: none;
  display: block;
  border: none;
  border-radius: 10px;
  margin: 25px 0 0 0;
  width: 95%;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
`;
