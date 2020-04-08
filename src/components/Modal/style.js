import styled from 'styled-components'

export const ErrorWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .7); 
  z-index:1111;
  /* position:fixed;
  top:40%;
  left:50%;
  transform:translate(-50%,-50%);
  width:200px;
  padding:50px;
  box-shadow:0 5px 30px rgba(0,0,0,.7);
  background-color:white;
  visibility:hidden;
  opacity:0;
  transition:0.5s;
  z-index:999; */
`

export const ErrorModal = styled.div`
  position:relative;
  z-index: 5;
  background-color: #fefefe;
  margin: 20px auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width: 400px;
  color: black;
  text-align: center;
`
