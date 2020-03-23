import React from 'react'
import PropTypes from 'prop-types'
import {
  InputWrapper,
  InputField,
  BlockLabel,
  InputHint,
  InputHintText
} from './style'

const Adornment = adornment => <img src={adornment} />

const Input = ({
  type,
  value,
  label,
  name,
  placeholder,
  orientation,
  onChange,
  startAdornment,
  endAdornment,
  showHint,
  hint,
  maxWidth,
  fullWidth
}) => {
  return (
    <InputWrapper>
      <div>
        {orientation && orientation === 'block' ? (
          <BlockLabel>{label}</BlockLabel>
        ) : (
          <label>{label}</label>
        )}
        {startAdornment && <Adornment adornment={startAdornment} />}
        <InputField
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          fullWidth={fullWidth}
          maxWidth={maxWidth}
        />
        {startAdornment && <Adornment adornment={endAdornment} />}
      </div>
      <InputHint>
        <InputHintText>{hint}</InputHintText>
      </InputHint>
    </InputWrapper>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  orientation: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  startAdornment: PropTypes.object,
  maxWidth: PropTypes.string,
  hint: PropTypes.string,
  showHint: PropTypes.bool,
  endAdornment: PropTypes.object,
  fullWidth: PropTypes.bool
}

Input.defaultProps = {
  type: 'hidden',
  orientation: 'block'
}

export default Input
