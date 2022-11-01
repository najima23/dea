import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

interface User{
  id:string;
  username:string;
  firstName:string;
  lastName:string;
  email: string
}

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  currentUser: Observable<User>;
  level: Observable<any>;

  constructor(
    private usersService: UsersService,
    private store: Store<{ count: User, level: any }> ){
    this.currentUser = this.store.select('count') as Observable<User>;
    this.level = this.store.select('level') as Observable<any>;

  }

  showUser() {
    this.usersService.getUser()
      .subscribe((data: any) => {
        console.log(data)
      });      
  }

  showOneUser() {
    this.usersService.getOneUser()
      .subscribe((data: any) => {
        //this.currentUser = data
      });      
  }

  ngOnInit(): void {
    this.showOneUser()
  }

}
