import styled from 'styled-components';

export const PDContainer = styled.div `
    margin:0;
    font-style:sans-serif;
    display:block;
`;
export const PDHeader = styled.h2 `
        margin: 25px 0 10px 0;
        font-size: 20px;
        text-align:center;
`;
export const PDStepHeader = styled.p `
    margin:0;
    padding:0;
    text-align:center;
`;
export const PDDetails = styled.h1 `
        margin: 45px 0 10px 0;
        font-size: 18px;
        text-align:center;
        font-weight:normal;
`;

export const PDInput = styled.input `
    width:90%;
    font-size:16px;
    outline:none;
    border: none;
    border-bottom: 1px solid #000000;
    display: block;
    margin: 50px 0 0 5%;
    padding-bottom:10px;
    ::placeholder {
      color: black;
      opacity:0.4;
      font-size:16px;
    }
  `;
export const PDButton = styled.button `
outline:none;
display: block;
border:none;
margin-top:50px;
border-radius: 10px;
margin-left:5%;
width: 90% ;
padding: 14px 28px;
font-size: 16px;
cursor: pointer;
text-align: center;
`;

export const PDPanValidation = styled.span`
  font-size:16px;
  color:red;
  padding: 18px;
`;
