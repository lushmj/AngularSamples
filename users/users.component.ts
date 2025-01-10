
import { Component,OnInit } from '@angular/core';
import { UserService } from './users.service';
import { User } from './users.model';

@Component({
  selector: 'users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
title='List of Users';
userList: User[];

constructor(private userService: UserService) {
  this.title = 'Users List';
  this.userList = [];
}

ngOnInit() {
  // Observable - Subscribe helps in asynchronous processing
  this.userService.getUsers().subscribe((response: User[]) => {
    this.userList = response;
  });
  
}
}
