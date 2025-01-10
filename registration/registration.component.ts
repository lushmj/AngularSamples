import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';
import { User } from '../users/users.model';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  postForm: FormGroup;
  isSubmitted = false;
  formValid = false;

  constructor(
    private formBuilder: FormBuilder,
    private registrationService: RegistrationService,
    private router: Router
  ) {
    this.postForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    this.formValid = true;
    // call Service to save the post (Assignment)
    alert('Form submitted successfully!');
    this.isSubmitted = true;
    this.formValid = true;
    console.log('postForm value ==>' + JSON.stringify(this.postForm.value));
    this.registrationService
      .registerUser(this.postForm.value)
      .subscribe((response: User) => {
        console.log(response);
        this.postForm.reset();
      });
  }
}
