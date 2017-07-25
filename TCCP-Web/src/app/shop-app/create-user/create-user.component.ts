import { ShopAppService } from '../shop-app.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {

  createUserForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private appService: ShopAppService) {
    this.createUserForm = this.formBuilder.group({


      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      birthDate: [''],
      streetAddress: '',
      city: '',
      state: '',
      zipCode: ''


    });
    this.createUserForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

  ngOnInit() {

  }
  createUser() {
    console.log("create User");
    this.appService.createUser(this.createUserForm.value);
    console.log(this.createUserForm.controls);
  }
  onValueChanged(data?: any) {
    if (!this.createUserForm) { return; }
    const form = this.createUserForm;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

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
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.'
    },
    'lastName': {
      'required': 'Last Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.'
    },
    'email': {
      'email': 'Invalid Email'
    }
  };
  onSubmit() {
    console.log("submit");
  }
}



