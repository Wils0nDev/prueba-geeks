import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailCharacterComponent } from './detail-character.component';
import { DetailCharacterRoutingModule } from './detail-character-routing.module';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ComponentsModule } from 'src/app/components/components.module';



@NgModule({
  declarations: [
    DetailCharacterComponent
  ],
  imports: [
    CommonModule,
    DetailCharacterRoutingModule,
    ComponentsModule,
    AngularMaterialModule,
    NgxSpinnerModule
    
  ]
})
export class DetailCharacterModule { }
