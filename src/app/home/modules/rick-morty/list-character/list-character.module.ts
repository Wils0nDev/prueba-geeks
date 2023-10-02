import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCharacterComponent } from './list-character.component';
import { ListCharacterRoutingModule } from './list-character-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    ListCharacterComponent
  ],
  imports: [
    CommonModule,
    ListCharacterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    NgxSpinnerModule
  ]
})
export class ListCharacterModule { }
