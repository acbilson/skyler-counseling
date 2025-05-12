import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  imports: [FormsModule,
    ReactiveFormsModule,
    MatFormField,
    MatInputModule,
    MatButton,
  ],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {

  form = inject(FormBuilder).nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
  });

  get c() {
    return this.form.controls;
  }


  onBook() {
    const bookModel = {
      firstName: this.c.firstName.value,
      lastName: this.c.lastName.value,
      email: this.c.email.value,
    };

    // TODO: book
    console.log( {bookModel });
  }



}
