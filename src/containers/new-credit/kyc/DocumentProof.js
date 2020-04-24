import React from 'react'
import PropTypes from 'prop-types'
import { InstructionContent, InstructionContentContainer } from './style'
import Logo from '../../../Assets/white.svg'
const DocumentProof = (props) => {
    const { id } = props
    return (
        <InstructionContentContainer>
            <img src={Logo} alt='complete' />
            <InstructionContent>{id}</InstructionContent>
        </InstructionContentContainer>
    )
}

DocumentProof.propTypes = {
    id: PropTypes.string.isRequired
}

export default DocumentProof
