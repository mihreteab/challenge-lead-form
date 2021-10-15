import ZipCode from '../pages/zipcode'
import FullNameCapture from '../pages/full-name'
import WelcomePage from '../pages/welcome'
import Address from '../pages/address'
import {
  addNewError,
  moveBackStep,
  moveNextStep,
  valueChanged
} from '../state/actions'
import { useLeadContext } from '../state/context'

export const useLeadFormUtils = () => {
  const {
    state: { currentStep },
    dispatch
  } = useLeadContext()

  const getCurrentComponent = () => {
    switch (currentStep) {
      case 0:
        return <WelcomePage />
      case 1:
        return <FullNameCapture />
      case 2:
        return <ZipCode />
      case 3:
        return <Address />
      default:
    }
  }
  const addError = (key, message) => dispatch(addNewError(key, message))
  const nextStep = () => dispatch(moveNextStep())
  const backStep = () => dispatch(moveBackStep())
  const changeValue = (key, value) => dispatch(valueChanged(key, value))

  return { getCurrentComponent, nextStep, changeValue, addError, backStep }
}
