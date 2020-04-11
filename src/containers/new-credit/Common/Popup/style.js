import styled from "styled-components";

export const Container = styled.div`
    /* display: ${(props) => (props.show ? "block" : "none")}; */
    width: 380px;
    height: 772px;
    position:fixed;
    top:0;
    background-color: rgba(0, 0, 0, 0.56);
    backdrop-filter: blur(1px);
    z-index:2;
  `
export const Content = styled.div`
  width: 328px;
  height: 232px;
  border-radius: 8px;
  background-color: #1e1e1e;
  position:absolute;
  top:84px;
  margin: 0 0 0 24px;
`
export const PopupHeader = styled.p`
  height: 24px;
  font-family: TTCommons;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  text-align: center;
  color: #898989;
  margin: 8px 16px 0 16px;
`

export const PopupDetail = styled.p`
  height: 48px;
  font-family: TTCommons;
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: white;
  margin: 8px 16px 0 16px;
`
export const PopupButton = styled.button`
  width:154px;
  height: 40px;
  border-radius:20px;
  text-align: center;
  background-color: white;
  margin: 24px 87px 0 87px;
  outline:none;
`
export const PopupButtonContent = styled.p`
  width:141px;
  height: 24px;
  font-family: TTCommons;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #1e1e1e;
  margin-top:8px;
  margin-bottom:8px;
  `