import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCharacterComponent } from './list-character.component';

const routes: Routes = [

  {
    path: '',
    component: ListCharacterComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCharacterRoutingModule { }
