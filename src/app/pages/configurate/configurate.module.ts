import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ConfigurateRoutingModule } from './configurate-routing.module';
import { ConfigurateComponent } from './configurate.component';

@NgModule({
  declarations: [
    ConfigurateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ConfigurateRoutingModule,
  ]
})
export class ConfigurateModule { }