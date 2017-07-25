import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { Headers, Http, HttpModule, Request, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShopAppService {

  private apiURL = 'http://localhost:5000/api/';
  private headers = new Headers();

  constructor(private http: Http) { }

  public createUser(user: User) {
    console.log(this.headers.toJSON());
    this.headers.append('Content-Type', 'application/json');
    var params = new URLSearchParams();
    params.set('value', '102');
    var options = new RequestOptions({ headers: this.headers, body: JSON.stringify(user) });
    this.http.post(this.apiURL + 'customers',
      params,
      options
    ).subscribe();

  }
  // private http: HttpClient
  // public createUser(user: User) {
  //   console.log(user);
  //   http.post('/api/items/add', user, {

  //   })
  //     .subscribe();
  // }
}
