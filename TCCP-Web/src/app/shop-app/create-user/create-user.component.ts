import { observable } from 'rxjs/symbol/observable';
import { User } from '../../shared/models/user';
import { Observable } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { ShopAppService } from '../shop-app.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {

  createUserForm: FormGroup;
  user: User;

  constructor(private formBuilder: FormBuilder, private appService: ShopAppService, private router: Router, private route: ActivatedRoute) {
    this.createUserForm = this.formBuilder.group({

      firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(24)]],
      email: ['', Validators.email],
      birthDate: [''],
      streetAddress: '',
      city: '',
      state: '',
      zipCode: ''

    });


  }

  ngOnInit() {
    this.createUserForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }
  createUser() {
    console.log("create User");
    if (this.createUserForm.valid) {
      this.appService.createUser(this.createUserForm.value).map(e => e = this.user)
        .subscribe(e => this.router.navigate(['/'], { relativeTo: this.route }));
    } else {
      this.createUserForm.updateValueAndValidity();
    }

    //.subscribe(e => this.router.navigate(['/user/', this.user.id], { relativeTo: this.route }));

  }
  onValueChanged(data?: any) {
    if (!this.createUserForm) { return; }
    const form = this.createUserForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      //console.log(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'firstName': '',
    'lastName': '',
    'email': ''
  };

  validationMessages = {
    'firstName': {
      'required': 'Name is required.',
      'minlength': 'First Name must be at least 2 characters long.',
      'maxlength': 'First Name cannot be more than 24 characters long.'
    },
    'lastName': {
      'required': 'Last Name is required.',
      'minlength': 'Last Name must be at least 2 characters long.',
      'maxlength': 'Last Name cannot be more than 24 characters long.'
    },
    'email': {
      'email': 'Invalid Email'
    }
  };
  onSubmit() {
    console.log("submit");

  }
}



