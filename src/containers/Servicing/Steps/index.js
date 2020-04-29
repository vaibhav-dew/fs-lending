import React from 'react'
import { StepsWrapper, StepsContainer,StepsHeader,StepsFinished } from './style'

const Steps = () => {
  return (
      <StepsWrapper>
          <StepsContainer>
            <StepsHeader>
                Congrats! You are 2 steps away from availing credit line of 15000
            </StepsHeader>
            <StepsFinished>
                Steps finished
            </StepsFinished>
          </StepsContainer>
      </StepsWrapper>
  )
}

export default Steps
