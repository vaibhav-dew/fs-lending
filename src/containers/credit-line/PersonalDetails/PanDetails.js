import React from 'react'
import { Link } from 'react-router-dom'
import {
  CFPanDetailsBlock,
  CFPanDetailsBlockItem,
  CFPanDetailsTitle,
  CFPanDetailsText,
  PanDetailsWrapper
} from './PanDetails.style'

const PanDetails = () => {
  return (
    <PanDetailsWrapper>
      <Link
        style={{
          backgroundColor: 'white',
          padding: '0 10px',
          textDecoration: 'none'
        }}
        to='/finance/lending/pan-details'
      >
        Edit
      </Link>
      <CFPanDetailsBlock style={{ border: '1px solid #E1E1E1' }}>
        <CFPanDetailsBlockItem>
          <CFPanDetailsTitle>PAN</CFPanDetailsTitle>
          <CFPanDetailsText>ALOPG0562F</CFPanDetailsText>
        </CFPanDetailsBlockItem>
        <CFPanDetailsBlockItem style={{ borderLeft: '1px solid #e1e1e1' }}>
          <CFPanDetailsTitle>Full Name</CFPanDetailsTitle>
          <CFPanDetailsText>Ghansham Gagnani</CFPanDetailsText>
        </CFPanDetailsBlockItem>
      </CFPanDetailsBlock>
    </PanDetailsWrapper>
  )
}

export default PanDetails
