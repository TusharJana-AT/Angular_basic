import { Component, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {

  userData:any=signal('')
  constructor(public userService:UserService){}
  ngOnInit(){
    const data=this.userService.userList();
    this.userData.set(data)
  }
}
