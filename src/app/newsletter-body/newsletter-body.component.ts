import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-newsletter-body',
  templateUrl: './newsletter-body.component.html',
  styleUrls: ['./newsletter-body.component.scss'],
  imports: [FormsModule, ReactiveFormsModule, NgIf]
})
export class NewsletterBodyComponent implements OnInit{
  signupForm: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    const formObj: {
      email: string
    } = this.signupForm.value;

    this.router.navigate(['/success'], {
      queryParams: {email: formObj.email},
      replaceUrl: true
    });
  }
}
