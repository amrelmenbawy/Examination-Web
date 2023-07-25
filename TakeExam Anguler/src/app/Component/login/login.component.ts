import { Router } from '@angular/router';
import { UserAuthService } from './../../Service/user-auth.service';
import { Component, OnInit } from '@angular/core';
import { state } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string ="";
  password:string ="";
  error:boolean;
  userlogin:boolean;
  constructor( private UserAuthService:UserAuthService ,private Router:Router)
  {
    this.error=false;
    this.userlogin = false ;
  }
  ngOnInit(): void {
    //this.UserAuthService.loggedstatus.subscribe(status=> this.userlogin = status);

  }
  login(){
    this.UserAuthService.Login(this.username,this.password).subscribe({
      next:(Response)=>{
        localStorage.setItem("token",Response.token)
        localStorage.setItem("username",this.username)
        this.UserAuthService.isloggedsubject.next(true);
        this.Router.navigate(['/home'])
        this.error=false;
        if(Response.role.length>0){
        localStorage.setItem("role",JSON.stringify(Response.role))
        this.UserAuthService.isloggedsubjectAdmin.next(true);
        this.Router.navigate(['/admin'])
        }
      },
      error:(error)=>{
        this.UserAuthService.isloggedsubject.next(false);
        this.username="";
        this.password="";
        this.error=true;
      }

  })
  }

  Check(state :any){
    if(state){
      this.Router.navigate(['/home'])
      this.error=false;
    }
    else{
      this.username="";
      this.password="";
      this.error=true;
    }
  }
}
