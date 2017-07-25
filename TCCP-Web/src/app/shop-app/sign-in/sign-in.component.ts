import { ShopAppService } from '../shop-app.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { User } from "../../shared/models/user";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {
  customers: User[]
  signInForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private appService: ShopAppService) {
    // 
    this.signInForm.valueChanges.subscribe(e => this.customerSearch(e));

  }

  ngOnInit() {

  }

  customerSearch(searchString: string) {
    this.appService.customerSearch(searchString).subscribe(e => this.customers = e);
    console.log(this.customers);

  }
}
