import { Component } from '@angular/core';
import { User } from '../model/user';
import { LoginuserService } from '../service/loginuser.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  user:User=new User();

  constructor(private loginservice:LoginuserService){}
  ngOnInit(): void {
    
  }
  userLogin(){
    console.log(this.user)
    this.loginservice.loginUser(this.user).subscribe(data=>{
      alert("Login Successfully")
    },error=>alert("Sorry please enter correct UserId and Password"));
  }
}
