import { Router } from '@angular/router';
import { UserAuthService } from './../../Service/user-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {

  constructor (private UserAuthService:UserAuthService , private Router:Router ){

  }
  ngOnInit(): void {
    // if(!this.UserAuthService.isuserLogged)
    // {
    //   this.Router.navigate(['/login']);
    // }
  }

}
