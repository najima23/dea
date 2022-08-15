import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartGameComponent } from './start-game.component';
import { TableComponent } from '../component/table/table.component';
import { UsersService } from '../users.service';



@NgModule({
  declarations: [
    StartGameComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [UsersService],
})
export class StartGameModule { 

}
