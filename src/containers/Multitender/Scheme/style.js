import styled from 'styled-components'

export const Container = styled.div`
        width: 100%;
        height: 800px;
        background-color: #1e1e1e;
    @media screen and (max-width: 500px) {
        width: 100%;
        height: 720px;
        background-color: #252525;
  }
`
export const LimitContent = styled.div`
    display:block;
    margin:12px 621px 0 280px;
    @media screen and (max-width: 500px) {
       margin: 24px 252px 0 16px;
  }
`
export const LimitHead = styled.p`
  width: 100%;
  height: 24px;
  font-family: TTCommons;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: normal;
  color: #8f8f8f;
  margin:0px;
  @media screen and (max-width: 500px) {
    width: 100%;
  height: 16px;
  font-family: TTCommons;
  font-size: 12px;
  line-height: 1.33;
  }
  `
export const LimitValue = styled.p`
  width: 100%;
  height: 32px;
  font-family: TTCommons;
  font-size: 28px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: #ffffff;
  margin-top:2px;
`