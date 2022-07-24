import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrammarComponent } from './grammar.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GrammarGraphComponent } from './cyto-graph/grammar-graph.component';
import { GrammarService } from './grammar.service';
import { GrammarGraphService } from './cyto-graph/grammar-graph.service';

@NgModule({
  declarations: [GrammarComponent, GrammarGraphComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSliderModule,
    MatRadioModule,
    FormsModule,
  ],
  providers: [GrammarService, GrammarGraphService],
})
export class GrammarModule {}
