import {Injectable} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'

import {AuthService} from '../../services/auth.service'
import {catchError, map, of, switchMap} from 'rxjs'
import {CurrentUserInterface} from 'src/app/shared/currentUser.interface'
import {PersistanceService} from 'src/app/shared/services/persistance.service'
import {
  getCurrentUserAction,
  getCurrentUserFailureAction,
  getCurrentUserSuccessAction,
} from '../actions/getCurrentUser.action'

@Injectable()
export class GetCurrentUserEffect {
  getCurrentUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCurrentUserAction),
      switchMap(() => {
        const token = this.persistanceService.get('accessToken')
        if (!token) {
          return of(getCurrentUserFailureAction())
        }
        return this.authService.getCurrentUser().pipe(
          map((currentUser: CurrentUserInterface) => {
            this.persistanceService.set('accessToken', currentUser.token)
            return getCurrentUserSuccessAction({currentUser})
          }),
          catchError(() => {
            return of(getCurrentUserFailureAction())
          }),
        )
      }),
    ),
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
  ) {}
}
