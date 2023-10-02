import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [

  {
    path : '',
    component : LayoutComponent,
    children : [
      {
        path: 'list-character',
        loadChildren:()=>
          import('src/app/home/modules/rick-morty/list-character/list-character.module')
          .then((m) => m.ListCharacterModule)
        
      },

      {
        path: 'detail-character',
        loadChildren:()=>
          import('src/app/home/modules/rick-morty/detail-character/detail-character.module')
          .then((m) => m.DetailCharacterModule)
        
      },
      { path: '', redirectTo: 'list-character', pathMatch: 'full' },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
