import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleComponent } from './puzzle.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [PuzzleComponent],
  imports: [
    BrowserModule,
    CommonModule
  ]
})
export class PuzzleModule { }
