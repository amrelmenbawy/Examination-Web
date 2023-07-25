import { UserAuthService } from './../../Service/user-auth.service';
import { Component ,OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  isuserlogging:boolean =false;
  isuserloggingadmin :boolean=false;
  username:string | null;
  constructor(private UserAuthService :UserAuthService, private Router :Router, private ConfirmService :NgConfirmService)
  {
    this.username="";
  }
  ngOnInit()
  {
    this.UserAuthService.loggedstatus.subscribe(status =>{
      this.isuserlogging= status
      this.username=localStorage.getItem("username");
    })
    this.UserAuthService.loggedstatusadmin.subscribe(status =>{
      this.isuserloggingadmin= status
    })
  };
  logout(){
    this.ConfirmService.showConfirm("Are you Sure ?" ,
      ()=> {
        this.UserAuthService.logout();
        this.Router.navigate(['/login']);
  },
      ()=>{

      }
      )
  }
}
