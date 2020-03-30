import styled from 'styled-components'

export const PersonalDetailsWrapper = styled.div`
  max-width: 400px;
  margin: 20px auto;
  width: 100%;
`

export const SubmitButton = styled.button`
  text-decoration: none;
  text-align: center;
  border: none;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  max-width: 400px;
  background: ${props => (props.disabled ? '#797979' : '#0bd')};
  color: #fff;
  display: block;
  outline: none;
`
