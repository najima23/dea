import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeaComponent } from './dea.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { CytoGraphComponent } from './cyto-graph/cyto-graph.component';
import { DeaService } from './dea.service';

@NgModule({
  declarations: [DeaComponent, CytoGraphComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSliderModule,
  ],
  providers: [DeaService],
})
export class DeaModule {}
