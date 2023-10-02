import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCharacterComponent } from './detail-character.component';

const routes: Routes = [

  {
    path: ':id',
    component: DetailCharacterComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailCharacterRoutingModule { }
