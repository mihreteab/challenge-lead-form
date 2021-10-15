import React from 'react'
import {
  DescriptionContainer,
  InputsGroup,
  QuestionContainer,
  Wrapper
} from '../components/styled-components'
import styled from 'styled-components'
import { useLeadContext } from '../state/context'
import { useLeadFormUtils } from '../utils/useLeadFormUtils'
import ContinueButton from '../components/continue-button'

const InputContainer = styled.div`
  width: inherit;
  position: relative;
  text-align: center;
  ${({ hasError }) =>
    hasError &&
    `
    input {
      border: 1px solid red;
    }
    p {
      font-size: 12px;
      font-family: Montserrat;
      color: red;
      margin: 0px;
    }
  `}
`

export default function ZipCode() {
  const { state } = useLeadContext()
  const { changeValue, addError, nextStep } = useLeadFormUtils()
  const validateAndMove = () => {
    if (!state.zipCode) return addError('zipCode', 'ZipCode is required')
    nextStep()
  }
  return (
    <Wrapper>
      <QuestionContainer isFullWidth>
        Let's Learn About Your Home
      </QuestionContainer>
      <DescriptionContainer isFullWidth>
        Enter your property's <strong>zip code</strong>
      </DescriptionContainer>
      <InputsGroup isAddress>
        <InputContainer hasError={state.errors.zipCode}>
          <input
            type='text'
            name='zipCode'
            id='zipCode'
            value={state.zipCode}
            onChange={e => changeValue('zipCode', e.target.value)}
            placeholder='Enter zip code...'
          />
          {state.errors.zipCode && <p>{state.errors.zipCode}</p>}
        </InputContainer>
      </InputsGroup>
      <ContinueButton onClick={validateAndMove} />
    </Wrapper>
  )
}
