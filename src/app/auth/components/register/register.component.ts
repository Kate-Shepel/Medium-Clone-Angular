import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Store, select} from '@ngrx/store'

import {registerAction} from '../../store/actions/register.action'
import {Observable} from 'rxjs'
import {isSubmittingSelector} from '../../store/selectors'
import {AuthService} from '../../services/auth.service'
import {CurrentUserInterface} from 'src/app/shared/currentUser.interface'
import {RegisterRequestInterface} from '../../types/registerRequest.interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmit(): void {
    console.log('submit', this.form.value, this.form.valid)
    const request: RegisterRequestInterface = {
      user: this.form.value,
    }
    this.store.dispatch(registerAction({request}))
  }
}
