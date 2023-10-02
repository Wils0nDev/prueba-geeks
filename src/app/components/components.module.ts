import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { CardComponent } from './card/card.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingImageComponent } from './loading-image/loading-image.component';
import { SnackBarComponent } from './snackbar/snackbar.component';



@NgModule({
  declarations: [
    CardComponent,
    LoadingImageComponent,
    SnackBarComponent
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
    LoadingImageComponent,
    SnackBarComponent
  ]
})
export class ComponentsModule { }
