import {createFeature} from '@ngrx/store'
import {reducers} from './reducers'

export const authFeature = createFeature({
  name: 'auth',
  reducer: reducers,
})

export const authFeatureSelector = authFeature.selectAuthState

export const isSubmittingSelector = authFeature.selectIsSubmitting

export const validationErrorsSelector = authFeature.selectValidationErrors
