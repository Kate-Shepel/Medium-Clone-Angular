import {createAction, props} from '@ngrx/store'

import {ActionTypes} from '../actionTypes'
import {CurrentUserInterface} from 'src/app/shared/currentUser.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'
import {LoginRequestInterface} from '../../types/loginRequestInterface'

export const getCurrentUserAction = createAction(ActionTypes.GET_CURRENT_USER)

export const getCurrentUserSuccessAction = createAction(
  ActionTypes.GET_CURRENT_USER_SUCCESS,
  props<{currentUser: CurrentUserInterface}>(),
)

export const getCurrentUserFailureAction = createAction(
  ActionTypes.GET_CURRENT_USER_FAILURE,
)
