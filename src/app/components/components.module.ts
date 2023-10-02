import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CardComponent } from './card/card.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingImageComponent } from './loading-image/loading-image.component';



@NgModule({
  declarations: [
    CardComponent,
    LoadingImageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    NgxSpinnerModule
  ],
  exports:[
    AngularMaterialModule,
    CardComponent,
    LoadingImageComponent
  ]
})
export class ComponentsModule { }
