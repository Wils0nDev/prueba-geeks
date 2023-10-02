import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { menuData } from 'src/app/data/menu.data';
import { MenuItem } from 'src/app/shared/models/general/menu/menu.response.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
 
  menu: Array<MenuItem> = new Array<MenuItem>();
  
  constructor() {}

  ngOnInit(): void {
    this.menu = menuData
  }

}
