import styled from 'styled-components'

export const BlockLabel = styled.label`
  display: block;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  text-align: left;
`

export const InputWrapper = styled.div`
  width: 95%;
  margin: auto;
`
export const InputField = styled.input`
  width: ${props => (props.fullWidth ? '100%' : 'initial')};
`

export const InputHint = styled.div`
  padding: 5px;
`

export const InputHintText = styled.span`
  height: 15px;
  font-size: 12px;
  font-weight: lighter;
`
