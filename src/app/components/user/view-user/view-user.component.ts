import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { UserService } from '../../../services/userService/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  private users: User[];

  constructor(private userService: UserService, private router: Router) { }


  ngOnInit() {
    this.userService.getUsers().subscribe((users: any) => {
      console.log(users);
      this.users = users;
    }, (error) => {
      console.log(error);
    })
  }

  deleteRecord(user) {
    this.userService.deleteUser(user.userId).subscribe(() => {
      this.users.splice(this.users.indexOf(user), 1);
    }, (error) => {
      console.log(error);

    });
  }


  // updateRecord(user) {
  //   this.userService.setter(user);
  //   this.router.navigate(['#']);
  // }

  // newRecord() {
  //   let user = new User();
  //   this.userService.setter(user);
  //   this.router.navigate(['#']);

  // }
}


