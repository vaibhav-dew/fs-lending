import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { CreditLineNav, CreditLineNavTitle } from './style'

/**
 * @description Navbar for lending
 */

const Navbar = props => {
  const icon = props.isExit
    ? 'https://image.flaticon.com/icons/svg/1617/1617543.svg'
    : 'https://image.flaticon.com/icons/svg/271/271218.svg'
  return (
    <CreditLineNav>
      <Link to={props.route}>
        <img width='20' src={icon} alt={'icon'} />
      </Link>
      <CreditLineNavTitle>{props.title}</CreditLineNavTitle>
    </CreditLineNav>
  )
}

Navbar.propTypes = {
  isExit: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  isExit: true,
  title: 'Credit Line',
  route: '/'
}

export default Navbar
