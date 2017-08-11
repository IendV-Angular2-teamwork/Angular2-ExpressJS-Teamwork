import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../../models/user.model';
import { UserService } from '../../../data/user.service';
import { NotificationService } from '../../../data/notification.service';
import Data from '../../../data/data.service';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user: User;
  notification: string;
  
  constructor(
    private data: Data,
    private router: Router, 
    private userService: UserService, 
    private notificationService: NotificationService
  ){
    this.user = new User();
    console.log(this.userService.isLoggedIn())
  }

  onSubmit(registerUserForm){ 
    registerUserForm = this.user;
    this.data.registerUser(this.user); 
    //console.log(this.user);
    this.notification = this.notificationService.getNotification();
    this.router.navigateByUrl('/login');
  }
}