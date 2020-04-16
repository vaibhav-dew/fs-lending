import styled from 'styled-components'

export const Container = styled.div`
        width: 100%;
        min-height: 100vh;
        max-height:auto;
        background-color: #1e1e1e;
        overflow:hidden;
    @media screen and (max-width: 500px) {
        /* height: 720px; */
        background-color: #252525;
        min-height:100vh;
        max-height:auto;
  }
`
export const LimitContent = styled.div`
    width:100%;
    display:block;
    margin:12px 621px 0 280px;
    @media screen and (max-width: 500px) {
       margin: 24px 252px 0 16px;
  }
`
export const LimitHead = styled.div`
  width: 100%;
  height: 24px;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: normal;
  color: #8f8f8f;
  margin:0px;
  @media screen and (max-width: 500px) {
    height: 16px;
    font-size: 12px;
    line-height: 1.33;
  }
  `
export const LimitValue = styled.div`
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
export const ProductListContainer = styled.div`
  width: 464px;
  height: 82px;
  border-radius: 8px;
  background-color: #262626;
  margin:32px 280px 0px 280px;
  @media screen and (max-width: 500px) {
  width:100%;
  height: 52px;
  border: solid 1px #333333;
  background-color: #333333;
  margin:16px 0 0 0;
  }
`
export const ProductContent = styled.div`
display:flex;
`
export const ProductCheck = styled.input`
height:24px;
width:24px;
margin : 24px 0 0 16px;
@media screen and (max-width: 500px) {
margin:8px 0 20px 16px;
}
`
export const ProductNameDetails = styled.div`
display:block;
/* margin-left:12px; */
`
export const ProductName = styled.p`
  width: 282px;
  height: 24px;
  font-family: TTCommons;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #ffffff;
  margin:0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px 0 0 12px;
  @media screen and (max-width: 500px) {
  width: 211px;
  height: 18px;
  font-family: TTCommons;
  font-size: 16px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.13;
  letter-spacing: normal;
  color: #ffffff;
  margin:8px 0 0 8px;
  }
`
export const ProductNameDesc = styled.p`
  width: 156px;
  height: 20px;
  font-family: TTCommons;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #8f8f8f;
  margin:0 0 0 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  @media screen and (max-width: 500px) {
  width: 159px;
  height: 20px;
  font-family: TTCommons;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: #8f8f8f;
  margin:0 0 0 8px;
  }

`
export const ProductValue = styled.div`
  width: 59px;
  height: 24px;
  font-family: PingFangSC;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  margin:20px 16px 0 55px;
  @media screen and (max-width: 500px) {
  position:absolute;
  right:0;
  width: 48px;
  height: 22px;
  font-family: TTCommons;
  font-size: 12px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
  margin:8px 16px;
  }
  `