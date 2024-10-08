import {CurrentUserInterface} from 'src/app/shared/currentUser.interface'
import {BackendErrorsInterface} from 'src/app/shared/types/backendErrors.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  isLoading: boolean
  currentUser: CurrentUserInterface | null
  isLoggedIn: boolean | null
  validationErrors: BackendErrorsInterface | null
}
