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

export default function Address () {
  const { state } = useLeadContext()
  const { changeValue, addError, nextStep } = useLeadFormUtils()
  const validateAndMove = () => {
    if (!state.address) return addError('address', 'Address is required');
    console.log({
        firstName: state.firstName,
        lastName: state.lastName,
        address: state.address,
        zipCode: state.zipCode
    })
  }
  return (
    <Wrapper>
      <QuestionContainer isFullWidth>
        Let's Learn About Your Home
      </QuestionContainer>
      <DescriptionContainer isFullWidth>
        Next, enter your property's street address
      </DescriptionContainer>
      <InputsGroup isAddress>
        <InputContainer hasError={state.errors.address}>
          <input
            type='text'
            name='address'
            id='address'
            value={state.address}
            onChange={e => changeValue('address', e.target.value)}
            placeholder='Enter street address'
          />
          {state.errors.address && <p>{state.errors.address}</p>}
        </InputContainer>
      </InputsGroup>
      <ContinueButton text="Show Me Results" onClick={validateAndMove} />
    </Wrapper>
  )
}
