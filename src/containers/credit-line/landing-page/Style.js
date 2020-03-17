import styled from 'styled-components';

export const HeaderContainer = styled.div `
    font-family:sans-serif;
    font-size:20px;
    background-color:#DCDCDC;
    width:100%;
    padding: 10px;
    text-align: center;
    margin-top: -8px;
    margin-left: -12px;
    `;

export const LPContainer = styled.div `
        font-family:sans-serif;
        margin:0;
    `;
export const LPHeader = styled.h2 `
        margin: 25px 0 25px;
        font-size: 20px;
        text-align:center;
    `;
export const LPSteps = styled.h2 `
        margin: 0 0 1px;
        font-size: 18px;
        font-weight: normal;
    `;
export const LPStepWrapper = styled.div `
       padding:0 0 15px 70px;
       position: relative;
       &:after{
        content:"";
        position: absolute;
        left: 38px;
        height: ${props => (props.disabled ? '0' : '100%')};
        top:26px;
        width:1px;
        background:#ccc;
       }
    `;
export const LPSteper = styled.div `
        margin-left:25px;
        display:block;
        position: absolute;
        left: 0;
        top: 0;
        width:25px;
        height:25px;
        border-radius:50%;
        background:#fff;
        border:1px solid #ccc;
        color:#333;
        line-height:25px;
        text-align:center;
    `;
export const LPWrapperConditions = styled.p `
        margin: 0;
        font-size: 15px;
        color: #333;
        opacity: 0.5;
    `;
export const LPList = styled.ul `
    margin-top:-10px;
    padding: 0px 20px;
    background-color: #fff;
    `;

export const LPListItem = styled.li `
    padding: 5px 0px;
    margin:0 0 5px 30px;
    `;
export const LPButton = styled.button `
        outline:none;
        display: block;
        border:none;
        border-radius: 10px;
        margin-left:5%;
        width: 90% ;
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        text-align: center;
  `;
