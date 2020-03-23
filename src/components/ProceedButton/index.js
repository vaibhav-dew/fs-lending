import React from 'react'
import PropTypes from 'prop-types'
import { Active, Disabled } from './style'

const ProceedButton = ({ active, content, route }) => {
  return (
    <div>
      {active ? (
        <Active href={route}>{content}</Active>
      ) : (
        <Disabled>{content}</Disabled>
      )}
    </div>
  )
}

ProceedButton.defaultProps = {
  active: false,
  content: 'Back to Home',
  route: '/'
}

ProceedButton.propTypes = {
  active: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
}

export default ProceedButton
