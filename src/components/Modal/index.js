import React from 'react'
import PropTypes from 'prop-types'
import {
  ErrorModal,
  ErrorWrapper,
} from './style'
const popup = {
  visibility: 'visible',
  opacity: '1'
}
const Modal = ({ title, text, closePopUp, next }) => {
  return (
    <ErrorWrapper id='myModal' style={next ? popup : {}}>
      <ErrorModal>
        <h3>{title}</h3>
        <p>{text}</p>
        <button onClick={closePopUp}>close</button>
      </ErrorModal>
    </ErrorWrapper>
  )
}

Modal.defaultProps = {
  title: 'Error',
  text: '',
}

Modal.propsTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Modal
