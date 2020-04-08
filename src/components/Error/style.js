import styled from "styled-components";

export const ErrorWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ErrorModal = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 400px;
  height: auto;
  color: black;
  text-align: center;
`;
