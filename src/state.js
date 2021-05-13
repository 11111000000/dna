export { LitState, stateVar } from 'lit-element-state'

import { observeState } from 'lit-element-state'

import { component } from 'haunted-lit-element'

export { observeState } from 'lit-element-state'

export const observedComponent = (it, options) =>
  observeState(component(it, options || {}))

import liteForm from 'lite-form'

export const withError = liteForm.withError
export const withField = liteForm.withField
export const withForm = liteForm.withForm
export const withFormClass = liteForm.withFormClass
export const withValue = liteForm.withValue
