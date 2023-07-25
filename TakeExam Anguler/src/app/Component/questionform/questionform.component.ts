import { QuestionService } from 'src/app/Service/question.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/Service/user-auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IQuestion } from 'src/app/models/i-question';

@Component({
  selector: 'app-questionform',
  templateUrl: './questionform.component.html',
  styleUrls: ['./questionform.component.css']
})
export class QuestionformComponent {
    error :boolean=false;
    QuestionID :any;
    question :IQuestion |any;
  constructor (private UserAuthService:UserAuthService ,private QuestionService: QuestionService  , private Router:Router,private ActivatedRoute:ActivatedRoute ){

  }
  ngOnInit(): void {
    if(!this.UserAuthService.isAdminLogged)
    {
      this.UserAuthService.isloggedsubjectAdmin.next(false);
      this.Router.navigate(['/login']);
    }
    this.QuestionID=this.ActivatedRoute.snapshot.paramMap.get('id');
    console.log(this.QuestionID);
    if(this.QuestionID !=0){
      this.QuestionService.GetByID(this.QuestionID).subscribe({
        next:(response)=>{
          this.question=response;
          this.gethead.setValue(this.question.head);
          this.getbody.setValue(this.question.body);
          this.geta.setValue(this.question.a);
          this.getb.setValue(this.question.b);
          this.getc.setValue(this.question.c);
          this.getd.setValue(this.question.d);
          this.getCorrectAns.setValue(this.question.correctAns);
        }
      })
    }
  }
    questionfrom = new FormGroup ({
    head : new FormControl("",[Validators.required,Validators.minLength(3)]),
    body :new FormControl("",[Validators.required,Validators.minLength(20)]),
    a :new FormControl("",[Validators.required ]),
    b :new FormControl("",[Validators.required]),
    c :new FormControl("",[Validators.required]),
    d :new FormControl("",[Validators.required]),
    correctAns :new FormControl("",[Validators.required,Validators.pattern(/^[abcd]{1}$/)]),
  })
get gethead(){
    return this.questionfrom.controls['head'] ;
  }
get getbody(){
    return this.questionfrom.controls['body'] ;
  }
get geta(){
    return this.questionfrom.controls['a'] ;
  }
get getb(){
    return this.questionfrom.controls['b'] ;
  }
get getc(){
    return this.questionfrom.controls['c'] ;
  }
get getd(){
    return this.questionfrom.controls['d'] ;
  }
get getCorrectAns(){
    return this.questionfrom.controls['correctAns'] ;
  }
  OperationONForm(e:any){
    e.preventDefault();
    console.log(this.questionfrom.value)
    if(this.questionfrom.status=='VALID'){
      if(this.QuestionID==0){
      this.QuestionService.Add(this.questionfrom.value).subscribe(()=> this.Router.navigate(['/admin']));
      }
      else{

        this.QuestionService.Edit(this.QuestionID,this.questionfrom.value).subscribe(()=> this.Router.navigate(['/admin']))
      }
      this.error=false;
    }
    else{
      this.error=true;
    }

  }
}
