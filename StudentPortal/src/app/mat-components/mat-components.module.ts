import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button'; 
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  exports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule
  ]
})
export class MatComponentsModule { }
