import styled from 'styled-components'

export const Container = styled.div`
  width: 90%;
  margin: auto;
`
export const Header = styled.h2`
  margin: 25px 0 10px 0;
  font-size: 20px;
  text-align: center;
`
export const Steps = styled.p`
  width: 90%;
  margin: auto;
  text-align: center;
`
export const StepHeader = styled.p`
  margin: 45px 0 10px 0;
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`
export const DetailContainer = styled.div`
  position: relative;
  padding: 1px 0 0 0;
`
export const EditOption = styled.div`
  padding: 0 0 0 0;
  margin: 0 0 0 0;
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #fff;
  border: 1px solid #ccc;
  color: #333;
  text-align: center;
`
export const DetailOption = styled.div`
  border: 1px solid #ccc;
  height: auto;
  margin-top: 15px;
  padding-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
`
export const DetailWrapper = styled.div`
  margin: 10px 0 0 15px;
`
export const Value = styled.p`
  width: 50%;
  display: inline-block;
  text-align: left;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  opacity: ${props => (props.detailHead ? '0.5' : 1)};
`

export const Conditions = styled.p`
  font-size: 14px;
  font-weight: normal;
  margin-left: 10px;
  margin-right: 10px;
`
export const Terms = styled.span`
  text-decoration: underline;
`
export const ConfirmButton = styled.button`
  outline: none;
  display: block;
  border: none;
  border-radius: 10px;
  width: 100%;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
`
