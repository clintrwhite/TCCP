import { SignInLog } from '../shared/models/signInLog';
import { APPIUM_PORT } from 'protractor/node_modules/webdriver-manager/built/lib/cmds';
import undefined from 'symbol-observable';
import { observable } from 'rxjs/symbol/observable';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { Headers, Http, HttpModule, Request, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ShopAppService {
  private apiURL = 'http://tccp.azurewebsites.net/api/';
  // private apiURL = 'http://localhost:5000/api/';
  private headers = new Headers();


  constructor(private http: Http) { }

  public createUser(user: User) {
    //  console.log(this.headers.toJSON());
    this.headers.append('Content-Type', 'application/json');
    var params = new URLSearchParams();
    params.set('value', '102');
    var options = new RequestOptions({ headers: this.headers, body: JSON.stringify(user) });
    return this.http.post(this.apiURL + 'customers',
      params,
      options
    ).map(response => response.json() as User)
  }

  customerSearch(searchString: string): Observable<User[]> {
    return this.http
      .get(this.apiURL + 'customers' + `/?term=${searchString}`)
      .map(response => response.json() as User[])
  }

  getUser(id: number): Observable<User> {
    return this.http.get(this.apiURL + 'customers/' + id)
      .map(response => response.json() as User)
  }

  signIn(user: User): Observable<string> {
    return this.http.get(this.apiURL + 'signIn/' + user.id)
      .map(response => response.json());
  }

  getSignInLog(userId: number): Observable<SignInLog[]> {
    return this.http.get(this.apiURL + 'getUserSignInLog/' + userId)
      .map(response => response.json() as SignInLog[]);
  }

  isUserSignedIn(userId: number): Observable<boolean> {
    return this.http.get(this.apiURL + 'isUserSignedIn/' + userId)
      .map(response => response.json());
  }
}
