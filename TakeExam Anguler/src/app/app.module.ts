import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './Component/home/home.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { FooterComponent } from './Component/footer/footer.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { ExamComponent } from './Component/exam/exam.component';
import { QuestionsComponent } from './Component/questions/questions.component';
import { AdminComponent } from './Component/admin/admin.component';
import { QuestionformComponent } from './Component/questionform/questionform.component'
import { NgConfirmModule } from 'ng-confirm-box';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    ExamComponent,
    QuestionsComponent,
    AdminComponent,
    QuestionformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgConfirmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
