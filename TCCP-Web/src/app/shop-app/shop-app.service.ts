import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { Headers, Http, HttpModule, Request, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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

  customerSearch(searchString: string): Observable<User[]> {
    return this.http
      .get(this.apiURL + 'customers' + `/?term=${searchString}`)
      .map(response => response.json() as User[])
  }

  getUser(id: number): Observable<User> {
    return this.http.get(this.apiURL + 'customers/' + id).map(response => response.json() as User)
  }

  signIn(user: User): Observable<string> {
    console.log("sign In: " + user.id);
    return this.http.get(this.apiURL + 'customers/' + user.id).map(response => response.json());
  }
}
