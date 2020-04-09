import React from "react";
import styled from "styled-components";

const Mark = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid  #a9a9a9;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color:#1e1e1e;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    background-color: #a990d0;
  }
`;

const Input = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Mark} {
    &::after {
      width: 12px;
      height: 12px;
      opacity: 1;
      margin:3px;
    }
  }
`;

const Label = styled.label`
  cursor: pointer;
  width:24px;
  height:24px;
  margin: 16px 0 0 16px;
  padding:0px;
`;

const Radio = (props) => (
  <Label>
    <Input name='type' value={props.value} type="radio" onChange={props.onValueChange} />
    <Mark />
  </Label>
);

export default Radio;
