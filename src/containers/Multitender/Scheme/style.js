import styled from 'styled-components'

export const Container = styled.div`
        width: 100%;
        min-height: 100vh;
        max-height:auto;
        background-color: #1e1e1e;
        overflow:hidden;
    /* @media screen and (max-width: 500px) {
        width:100%;
        background-color: #1e1e1e;
        min-height:100vh;
        max-height:auto; */
  }
`
export const LimitContent = styled.div`
    width:464px;
    display:block;
    margin:auto;
    margin-top:12px;
        @media screen and (max-width: 500px) {
       margin: 24px 252px 0 16px;
  }
`
export const LimitHead = styled.div`
  width: 100%;
  height: 24px;
  font-size: 16px;
  line-height: 1.5;
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
  font-size: 28px;
  font-weight: 600;

  line-height: 1.14;
  color: #ffffff;
  margin-top:2px;
`
export const ProductListContainer = styled.div`
  width: 464px;
  height: 82px;
  border-radius: 8px;
  background-color: #262626;
  margin:auto;
  margin-top:32px;
  @media screen and (max-width: 500px) {
  width:auto;
  height: 52px;
  border: solid 1px #333333;
  background-color: #333333;
  margin:auto;
  margin-top:16px;
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
width:auto;
/* margin-left:12px; */
`
export const ProductName = styled.p`
  width: 282px;
  height: 24px;
  font-size: 16px;
  font-weight: 600;

  line-height: 1.5;
  color: #ffffff;
  margin:0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px 0 0 12px;
  @media screen and (max-width: 500px) {
  width: 211px;
  height: 18px;
  font-size: 16px;
  font-weight: 600;

  line-height: 1.13;
  color: #ffffff;
  margin:8px 0 0 8px;
  }
`
export const ProductNameDesc = styled.p`
  width: auto;
  height: 20px;
  font-size: 14px;
  line-height: 1.43;
  color: #8f8f8f;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin:0 0 0 12px;
  @media screen and (max-width: 500px) {
  width: 159px;
  height: 20px;
  font-size: 14px;
  line-height: 1.43;
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
  line-height: 1.5;
  text-align: right;
  color: #ffffff;
  margin:20px 16px 0 55px;
  @media screen and (max-width: 500px) {
  position:absolute;
  right:0;
  width: 48px;
  height: 22px;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.83;
  text-align: right;
  color: #ffffff;
  margin:8px 16px;
  }
  `

export const EmiContainer = styled.div`
  width: 464px;
  height: auto ;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.04);
  margin:auto;
  margin-top:1px;
  @media screen and (max-width: 500px) {
  width:100%;
  height: auto;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.04);
  margin:0px 0 0 0 ;
  }`
export const EmiHead = styled.div`
width: 320px;
  height: 24px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: #ffffff;
  margin: 7px 0 0 16px;
@media screen and (max-width: 500px) {
  height: 24px;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  color: #ffffff;
  padding: 7px 0 0 26px;
  }`

export const TableHeader = styled.div`
display:flex;
@media screen and (max-width: 500px) {
  display:flex;
  }`


export const TableHeaderData = styled.div`
@media screen and (max-width: 500px) {
  width: 55px;
  height: 32px;
  font-size: 12px;
  font-weight: 600;

  line-height: 1.33;
  text-align: center;
  color: #8f8f8f;
  margin-left:8px;
  /* padding-left:36px; */
  margin-top:10px;
  }`

export const TableRow = styled.div`
display:flex;
@media screen and (max-width: 500px) {
  height: 52px;
  /* opacity: 0.04; */
  border: solid 1px #ffffff;
  background-color: rgba(30, 30, 30, 0.65);
  display:flex;
  }`

export const TableRowData = styled.div`
@media screen and (max-width: 500px) {
  width: 50px;
  height: 24px;
  font-size: 14px;
  font-weight: 600;

  line-height: 1.71;
  text-align: center;
  color: #ffffff;
  margin: 14px 0 14px 0;
  }`
export const TableRowContent = styled.div`
display:flex;
margin:0px;
`

export const Button = styled.button`
  display:flex;
  justify-content:center;
  width: 299px;
  height: 40px;
  border-radius: 20px;
  background-color: #ffffff;
  margin:auto;
  margin-top:32px;
  padding:0px;
  margin-bottom:34px;
@media screen and (max-width: 500px) {
  width: 100%;
  height: 72px;
  background-color: #ffffff;
  /* bottom: 0; */
    position: absolute;
    outline:none; 
     margin-bottom:0px;
     }

`
export const ButtonContent = styled.div`
width: 274px;
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
@media screen and (max-width: 500px) {
  width: 100%;
  height: 24px;
  font-family: TTCommons;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.33;
  text-align: center;
  color: #1e1e1e;  }

`