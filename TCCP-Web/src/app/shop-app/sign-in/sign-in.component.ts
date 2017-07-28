import { Http } from '@angular/http';
import { ShopAppService } from '../shop-app.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import { User } from "../../shared/models/user";
import 'rxjs';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})


export class SignInComponent implements OnInit {
  customers: Observable<User[]>
  users: User[]
  test: Observable<any>
  private anyErrors: boolean;
  private finished: boolean;
  private searchTerms = new Subject<string>();
  constructor(private appService: ShopAppService, private http: Http) {

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

    // let apiURL = 'http://localhost:5000/api/';
    //
    // this.http
    //   .get(apiURL + 'customers' + `/?term=benjamen`).subscribe(e => console.log(e.json()))

    // this.customers = this.customerSearch("test");

    // let subscription = this.searchTerms.subscribe(
    //   value => this.users = value,
    //   error => this.anyErrors = true,
    //   () => this.finished = true);
  }


  customerSearch(searchString: string): Observable<User[]> {
    return this.appService.customerSearch(searchString)///.map(response => response.json()
  }



}
