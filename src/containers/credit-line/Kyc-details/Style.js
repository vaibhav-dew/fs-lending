import styled from "styled-components";

export const Container = styled.div`
  margin:auto;
  width: 90%;
  height: 100vh;
`;
export const Horizontal = styled.hr`
  opacity: 0.2;
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
  width: 80%;
  padding:0;
  font-size: 18px;
  margin:auto;
  text-align: center;
  font-weight: normal;
  margin-top: 45px;
  margin-bottom: 10px;
`;
export const OptionContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.1);
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
  margin: 0 5px 10px 40px;
  opacity: 0.8;
`;

export const InstructionContainer = styled.div`
  width:100%;
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
  width:100%;
  outline: none;
  display: block;
  border: none;
  border-radius: 10px;
  margin: auto;
  margin-top:20px;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
`;
