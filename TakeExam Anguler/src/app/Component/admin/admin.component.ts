import { Location } from '@angular/common';
import { QuestionService } from 'src/app/Service/question.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, QueryList } from '@angular/core';
import { UserAuthService } from './../../Service/user-auth.service';
import { Router } from '@angular/router';
import { IQuestion } from 'src/app/models/i-question';
import { NgConfirmService } from 'ng-confirm-box'
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  QuestionsList:IQuestion[]=[];
  constructor (private UserAuthService:UserAuthService ,private Location:Location, private Router:Router,
    private QuestionService  :QuestionService , private ConfirmService :NgConfirmService ){
  }

  ngOnInit(): void {
    if(!this.UserAuthService.isAdminLogged)
    {
      this.UserAuthService.isloggedsubjectAdmin.next(false);
      this.Router.navigate(['/login']);
    }
    this.QuestionService.GetAll().subscribe({
      next:(Response)=>{
          this.QuestionsList = Response;
        }
      })
  }

  delete(ID :any){
    this.ConfirmService.showConfirm("Are you Sure About delete ?" ,
      ()=> {  this.QuestionService.Delete(ID).subscribe(
      {
        next:()=>
        this.QuestionsList =this.QuestionsList.filter((p:any) => p.id !=ID),
      }
      )
      this.ngOnInit()
  },
      ()=>{

      }
      )
}
trackby(index:number , ques:IQuestion):number{
  return ques.id;
}
}
