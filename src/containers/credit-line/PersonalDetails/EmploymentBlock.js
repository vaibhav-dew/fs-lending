import React from 'react'
import styled from 'styled-components'

const RadioBlock = styled.div`
  padding: 5px;
  display: flex;
`
const RadioOption = styled.div`
  flex: 1;
`
const RadioButton = styled.input`
  margin-right: 5px;
`

const EmploymentBlock = () => {
  return (
    <div>
      Employment Type
      <RadioBlock>
        <RadioOption>
          <RadioButton
            id='salaried'
            type='radio'
            name='employmentType'
            value='salaried'
          />
          <label htmlFor='salaried'>Salaried</label>
        </RadioOption>
        <RadioOption>
          <RadioButton
            id='selfEmployed'
            type='radio'
            name='employmentType'
            value='selfEmployed'
          />
          <label htmlFor='selfEmployed'>Self Employed</label>
        </RadioOption>
      </RadioBlock>
    </div>
  )
}

export default EmploymentBlock
