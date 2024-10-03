import {createFeature, createSelector} from '@ngrx/store'
import {reducers} from './reducers'
import {AuthStateInterface} from '../types/authState.interface'

export const authFeature = createFeature({
  name: 'auth',
  reducer: reducers,
})

export const authFeatureSelector = authFeature.selectAuthState

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting,
)

export const validationErrorsSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors,
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn,
)

export const isAnonymousSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn === false,
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser,
)
