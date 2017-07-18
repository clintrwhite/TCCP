import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {

    signInForm = new FormGroup ({
    name: new FormControl()
    });
  
  
  constructor() { }

  ngOnInit() {
  }

}
