import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';



const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatTabsModule,
  MatFormFieldModule,
  MatSelectModule
];

@NgModule({
  declarations: [],
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ],
  providers: []
})
export class MaterialModule { }
