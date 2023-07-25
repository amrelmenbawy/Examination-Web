import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../models/iuser';
@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
  baseurl :string;
  httpOptions={};
  constructor(private http:HttpClient) {
    this.baseurl="http://localhost:5260/api/Account/register";
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        //Authorization: `Bearer ${this.token}`
      })
    };
  }
  registerUser(user:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(this.baseurl,user,this.httpOptions);
  }


}
