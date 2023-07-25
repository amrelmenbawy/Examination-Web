import { ContactComponent } from './../Component/contact/contact.component';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {IQuestion} from '../models/i-question';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  baseUrl:string ;
  httpOptions={};
  token:string|null;
  constructor(private http :HttpClient ) {
    this.baseUrl="http://localhost:5260/api/Questions";
    this.token=localStorage.getItem("token");
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${this.token}`
      })
    };

  }
  GetAll():Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(this.baseUrl, this.httpOptions);
  }
  GetByID(Id:number):Observable<IQuestion>{
    return this.http.get<IQuestion>(`${this.baseUrl}/${Id}`,this.httpOptions);
  }
  Add(Question:any):Observable<IQuestion>{
    return this.http.post<IQuestion>(this.baseUrl,Question , this.httpOptions);
  }
  Edit(Id:number,Question:any) :Observable<IQuestion>{
    return this.http.put<IQuestion>(`${this.baseUrl}/${Id}`,Question, this.httpOptions);
  }
  Delete(Id:number) :Observable<IQuestion>{
    return this.http.delete<IQuestion>(`${this.baseUrl}/${Id}`, this.httpOptions);
  }

}
