import styled from "styled-components";

export const BlockLabel = styled.label`
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  color: #999;
  text-align: left;
`;

export const InputWrapper = styled.div`
  padding: 0 5px;
  margin-bottom: 15px;
`;

export const InputField = styled.input`
  width: ${(props) => (props.fullWidth ? "100%" : "initial")};
  color: #ddd;
  caret-color: #ddd;
  background-color: transparent;
  padding: 2px;
  outline: none;
  border: none;
  border-bottom: ${(props) =>
    props.error ? "2px solid red" : "2px solid #999"};
`;

export const InputHint = styled.div`
  padding: 5px;
`;

export const InputHintText = styled.span`
  height: 15px;
  font-size: 12px;
  font-weight: lighter;
  color: ${(props) => (props.error ? "red" : "#999")};
`;
