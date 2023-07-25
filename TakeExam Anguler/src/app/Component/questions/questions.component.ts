import { Location } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/Service/question.service';
import { IQuestion } from 'src/app/models/i-question';
import { FormGroup ,FormControl } from '@angular/forms';
import { UserAuthService } from 'src/app/Service/user-auth.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
questions:IQuestion[]=[];
changer:number=1;
progress:number=0;
score:number=0;
answer : string ="" ;
answerStatus:string ='';
Right:boolean;
Show :boolean;
  constructor(private QuestionService: QuestionService ,private UserAuthService:UserAuthService , private Router:Router ,private Location:Location){
    this.Right=false;
    this.Show=true;
  }
  ngOnInit(): void {
  //   if(!this.UserAuthService.isuserLogged)
  // {
  //   this.Router.navigate(['/login']);
  // }
    this.QuestionService.GetAll().subscribe({
      next:(response)=>
     // console.log(response[0].body)
      this.questions=response
    })
    console.log(this.questions)
  }
  get Questions():IQuestion[]{
    this.progress =(this.changer/this.questions.length)*100
    return this.questions;
  }
  previous(){
    this.changer--;
    this.progress = (this.changer/this.questions.length)*100
  }
  Next(){
    if(this.changer!=this.questions.length){
    this.changer++;
    this.progress = (this.changer/this.questions.length)*100
    this.Right=false;
    this.answer="";
    }
    else {
      this.Show=false;
    }
  }
  OperationONForm(id:number){
    console.log(this.Questions[this.Questions.length-1]);

    let q:any=this.Questions.find((q)=>q.id==id);
    console.log(q.correctAns);
    if(this.answer==q.correctAns)
    {
      this.score++;
      this.Right =true;
      this.answerStatus='r';

      console.log(this.score);
    }
    else{
      this.answerStatus='w';
      this.Right =true;
    }
  }
  Back(){
    this.Location.back();
  }
}
