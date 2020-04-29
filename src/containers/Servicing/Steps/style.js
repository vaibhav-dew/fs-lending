import styled from "styled-components";

export const StepsWrapper = styled.div`
width: 100%;
height: 100vh;
display:flex;
`
export const StepsContainer = styled.div`
    width:328px;
    height: 407px;
    margin: 88px auto 225px;
    border-radius: 8px;
    background-color: #232323;
    margin:88px auto 225px;
    @media (min-width: 768px) { 
    height: 388px;
    width:436px;
    margin:93px auto 319px;
  }
`

export const StepsHeader = styled.h1`
width: 280px;
font-size: 20px;
font-weight: 600;
line-height: 1.14;
text-align: center;
color: #ffffff;
padding-top:24px;
margin:auto;
@media (min-width: 768px) {
    width: 411px;
    font-size: 28px;
  }
`
export const StepsFinishedContainer = styled.div`

`
export const StepsFinished = styled.p`
width: 295px;
  height: 24px;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: #ffffff;
  margin: 16px auto 0;
@media (min-width: 768px) {
    width: 415px;
    margin-top:24px;
  }
`