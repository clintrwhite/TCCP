import { ActivatedRoute, ParamMap } from '@angular/router';
import { Http } from '@angular/http';
import { ShopAppService } from '../shop-app.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { User } from '../../shared/models/user';
import 'rxjs/observable';
import { Subject } from 'rxjs/Subject';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  @Input() user: User;
  customers: Observable<User[]>;

  private anyErrors: boolean;
  private finished: boolean;
  private searchTerms = new Subject<string>();
  constructor(private appService: ShopAppService, private http: Http, private route: ActivatedRoute, private location: Location) {

  }
  search(term: string): void {
    console.log(term);
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.customers = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.appService.customerSearch(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<User[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<User[]>([]);
      });
  }
}
