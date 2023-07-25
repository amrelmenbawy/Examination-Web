import { UserAuthService } from './../../Service/user-auth.service';

import { UserRegisterService } from 'src/app/Service/user-register.service';
import { Component, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Iuser } from 'src/app/models/iuser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  strongPasswordRegex:RegExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()_+~`|}{[\]:;'<>,.?/\\-])(?=.{8,})[a-zA-Z0-9!@#$%^&*()_+~`|}{[\]:;'<>,.?/\\-]+$/ ;
  error :boolean=false;
  userform:FormGroup;
  constructor (private UserRegisterService :UserRegisterService , private Router :Router ,private UserAuthService :UserAuthService){
  this.userform = new FormGroup({
    "username" : new FormControl("",[Validators.required , Validators.minLength(3)]),
    "password" :new FormControl("",[Validators.required ,Validators.pattern(this.strongPasswordRegex)]),
    "email" : new FormControl("",[Validators.required , Validators.email])
  })
}
  get getusername(){
    return this.userform.controls["username"]
  }
  get getpassword(){
    return this.userform.controls["password"]
  }
  get getemail(){
    return this.userform.controls["email"]
  }

  SendUser(e:any){
    e.preventDefault();
    console.log(this.userform.value)
    if(this.userform.status=='VALID')
    {
      let user :Iuser ={
        "username":this.userform.value.username,
        "password":this.userform.value.password,
        "email":this.userform.value.email
      };
      this.UserRegisterService.registerUser(user).subscribe();
      this.error=false;
      //this.UserAuthService.LoginFromRestretion(this.getusername,this.getpassword);
      this.Router.navigate(['/login'])
    }
    else{
      this.error=true;
    }
  }
}
