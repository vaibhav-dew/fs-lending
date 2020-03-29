import styled from 'styled-components'

export const ErrorWrapper = styled.div`
  position: fixed;
  /* z-index: 1; */
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`

export const ErrorModal = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 400px;
  color: black;
  text-align: center;
`
