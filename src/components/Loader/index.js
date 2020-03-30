import React from 'react'
import Navbar from 'finance/Lending/Common/Navbar'
import styled from 'styled-components'

const LoaderContent = styled.div`
  font-size: 30px;
  width: 80%;
  margin: 0 auto;
  padding: 120px;
`
const Loader = () => {
  return (
    <React.Fragment>
      <Navbar isExit={false} title='Credit Line' />
      <LoaderContent> Loading...</LoaderContent>
    </React.Fragment>
  )
}
export default Loader
