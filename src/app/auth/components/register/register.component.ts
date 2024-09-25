import {Component, OnInit} from '@angular/core'
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {Store, select} from '@ngrx/store'

import {registerAction} from '../../store/actions/register.action'
import {Observable} from 'rxjs'
import {isSubmittingSelector} from '../../store/selectors'

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
      email: '',
      password: '',
    })
    console.log(this.form.valid)
  }

  onSubmit(): void {
    console.log(this.form.value)
    this.store.dispatch(registerAction(this.form.value))
  }
}
