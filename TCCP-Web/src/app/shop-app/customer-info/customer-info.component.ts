import { User } from '../../shared/models/user';
import { ShopAppService } from '../shop-app.service';
import { Component, Input, OnInit } from '@angular/core';
import 'rxjs'
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {
  @Input() user: User;
  constructor(private appService: ShopAppService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.appService.getUser(+params.get('id')))
      .subscribe(u => this.user = u);
  }
}


