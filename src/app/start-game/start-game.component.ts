import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  currentUser: any;

  constructor(
    private usersService: UsersService,
  ){}

  showUser() {
    this.usersService.getUser()
      .subscribe((data: any) => {
        console.log(data)
      });      
  }

  showOneUser() {
    this.usersService.getOneUser()
      .subscribe((data: any) => {
        this.currentUser = data
      });      
  }

  ngOnInit(): void {
    this.showOneUser()
  }

}
