import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { connect } from 'react-redux'
import {
  EMPLOYMENT_TYPE_SELF_EMPLOYED,
  EMPLOYMENT_TYPE_SALARIED
} from './Constants'
import { saveEmploymentType } from './Actions'

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

const EmploymentBlock = props => {
  const [employmentType, setEmploymentType] = useState(null)
  const toggle = e => {
    setEmploymentType(e.target.value)
  }
  useEffect(() => {
    props.saveEmploymentType(employmentType)
  }, [employmentType])
  return (
    <div>
      Employment Type
      <RadioBlock>
        <RadioOption>
          <RadioButton
            id='salaried'
            type='radio'
            name='employmentType'
            value={EMPLOYMENT_TYPE_SALARIED}
            onClick={toggle}
          />
          <label htmlFor='salaried'>Salaried</label>
        </RadioOption>
        <RadioOption>
          <RadioButton
            id='selfEmployed'
            type='radio'
            name='employmentType'
            value={EMPLOYMENT_TYPE_SELF_EMPLOYED}
            onClick={toggle}
          />
          <label htmlFor='selfEmployed'>Self Employed</label>
        </RadioOption>
      </RadioBlock>
    </div>
  )
}

EmploymentBlock.propTypes = {
  saveEmploymentType: PropTypes.func.isRequired
}

EmploymentBlock.defaultProps = {
  saveEmploymentType
}

const mapDispatchToProps = dispatch => ({
  saveEmploymentType: employmentType =>
    dispatch(saveEmploymentType(employmentType))
})

export default connect(null, mapDispatchToProps)(EmploymentBlock)
