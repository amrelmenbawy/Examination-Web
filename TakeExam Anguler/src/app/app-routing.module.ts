import { authGuard } from './Gaurds/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { ContactComponent } from './Component/contact/contact.component';
import { AboutComponent } from './Component/about/about.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ExamComponent } from './Component/exam/exam.component';
import { QuestionsComponent } from './Component/questions/questions.component';
import { AdminComponent } from './Component/admin/admin.component';
import { QuestionformComponent } from './Component/questionform/questionform.component';
import { authadminGuard } from './Gaurds/authadmin.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:AdminComponent},
  {path:'question/:id/edit',component:QuestionformComponent },
  {path:'exam',component:ExamComponent,canActivate:[authGuard]},
  {path:'Questions',component:QuestionsComponent,canActivate:[authGuard]},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path :'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
