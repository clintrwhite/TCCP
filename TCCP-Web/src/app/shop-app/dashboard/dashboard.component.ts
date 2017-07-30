import { ActivatedRoute, ParamMap } from '@angular/router';
import { Http } from '@angular/http';
import { ShopAppService } from '../shop-app.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { User } from "../../shared/models/user";
import 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() user: User;
  signInResult: Observable<string>

  constructor(private appService: ShopAppService, private http: Http, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.appService.getUser(+params.get('id')))
      .subscribe(u => this.user = u);

  }

  signIn() {
    console.log("signing in");
    this.signInResult = this.appService.signIn(this.user);
  }
}
