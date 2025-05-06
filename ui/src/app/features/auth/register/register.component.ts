import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatButton,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  authService = inject(AuthenticationService);

  form = inject(FormBuilder).nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
  });

  get c() {
    return this.form.controls;
  }

  constructor() {}

  onRegister() {
    const registerModel = {
      firstName: this.c.firstName.value,
      lastName: this.c.lastName.value,
      email: this.c.email.value,
      password: this.c.password.value
    };

    this.authService.register(registerModel).subscribe();
  }
}
