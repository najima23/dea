import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

interface User{
  id:string;
  username:string;
  firstName:string;
  lastName:string;
  email: string
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  count$: Observable<User>;

  constructor(private store: Store<{ count: User }>) {
    this.count$ = this.store.select('count');
  }

  ngOnInit(): void {
  }

}
