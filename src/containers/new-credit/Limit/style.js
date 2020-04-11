import styled from "styled-components";

export const Container = styled.div`
    /* display: ${(props) => (props.show ? "block" : "none")}; */
    width: 380px;
    height: 772px;
    -webkit-backdrop-filter: blur(2px);
    position:fixed;
    top:0;
    background-color: rgba(0, 0, 0, 0.56);
    backdrop-filter: blur(2px);
  /* justify-content: center;
  width: 359px;
  height: 772px;
  background-color: rgba(0, 0, 0, 0.56);
  position: fixed;
  top: 0;
  backdrop-filter: blur(2px); */
  `
export const Content = styled.div`
  width: 380px;
  height: 400px;
  border-radius: 8px;
  background-color: #1e1e1e;
  z-index:2;
  position:absolute;
  top:84px;
  `
export const Header = styled.div`
width: 328px;
  height: 22px;
  font-family: TTCommons;
  font-size: 18px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: center;
  color: rgba(255, 255, 255, 0.48);
  margin: 10px 16px 0 16px;
`
export const ValueHeader = styled.div`
  width: 296px;
  height: 28px;
  font-family: TTCommons;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
margin :31px 32px 0 32px;
`
export const Value = styled.div`
    width: 166px;
  height: 32px;
  font-family: TTCommons;
  font-size: 48px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.67;
  letter-spacing: normal;
  color: #a990d0;
  margin: 16px 97px 0 104px;
  `
export const ProceedButton = styled.button`
 width: 324px;
  height: 40px;
  border-radius: 20px;
  background-color: #ffffff;
  margin:48px 18px 0 18px;
  outline:none;
`
export const ProceedButtonContent = styled.div`
  width: 100px;
  height: 14px;
  font-family: TTCommons;
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: center;
  color: #1e1e1e;
  margin:auto;
  `
export const RedirectContent = styled.div`
width: 300px;
  height: 40px;
  font-family: TTCommons;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin: 24px 36px 0 24px;
`