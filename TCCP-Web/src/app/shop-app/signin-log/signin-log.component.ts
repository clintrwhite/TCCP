import { Observable } from 'rxjs/Rx';
import { SignInLog } from '../../shared/models/signInLog';
import { User } from '../../shared/models/user';
import { ShopAppService } from '../shop-app.service';
import { Component, Input, OnInit } from '@angular/core';
import 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-signin-log',
  templateUrl: './signin-log.component.html',
  styleUrls: ['./signin-log.component.css']
})
export class SigninLogComponent implements OnInit {
  @Input() user: User;
  signInLog: SignInLog[];

  constructor(private appService: ShopAppService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.appService.getSignInLog(+params.get('id')))
      .subscribe(s => this.signInLog = s);

  }

}
