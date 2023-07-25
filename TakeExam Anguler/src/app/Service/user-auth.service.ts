import { Itoken } from './../models/itoken';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  public isloggedsubject :BehaviorSubject<boolean>;
  public isloggedsubjectAdmin :BehaviorSubject<boolean>;

  baseUrl:string ="http://localhost:5260/api/Account/login";
  constructor(private http :HttpClient ) {
    this.isloggedsubject = new BehaviorSubject<boolean>(this.isuserLogged);
    this.isloggedsubjectAdmin =new BehaviorSubject<boolean>(this.isuserLogged);
  }

Login(username:any , password :any):Observable<Itoken>{
    let userdata ={
      "username":username,
      "password":password
    }
    return this.http.post<Itoken>(this.baseUrl,userdata)
  }
LoginFromRestretion(username:any , password :any){
    let userdata ={
      "username":username,
      "password":password
    }
    this.http.post<Itoken>(this.baseUrl,userdata).subscribe(
      Response =>{
          localStorage.setItem("token",Response.token)
          localStorage.setItem("username",`${userdata.username}`)
          this.isloggedsubject.next(true);
      })
  }
  // this.UserAuthService.Login(this.getusername,this.getpassword).subscribe(
  //   Response =>{
  //   localStorage.setItem("token",Response.token)
  //   localStorage.setItem("username",`${user.username}`)
  //   this.UserAuthService.isloggedsubject.next(true);
  //   this.Router.navigate(['/home'])
  // })





  logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("username")
    this.isloggedsubject.next(false)
    this.isloggedsubjectAdmin.next(false);
  }
get isuserLogged(){
    return  localStorage.getItem("token")?true:false;
  }
get isAdminLogged(){
  return  localStorage.getItem("role")?true:false;
}
get loggedstatus(){
  return this.isloggedsubject.asObservable();
}
get loggedstatusadmin(){
  return this.isloggedsubjectAdmin.asObservable();
}
}
