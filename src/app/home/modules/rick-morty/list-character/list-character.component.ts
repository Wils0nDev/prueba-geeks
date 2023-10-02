import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Result } from 'src/app/shared/models/core/character.interface';
import { RickandmortyService } from 'src/app/shared/services/rickandmorty/rickandmorty.service';
import { NgxSpinnerService } from 'ngx-spinner';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss']
})
export class ListCharacterComponent implements OnInit {

  
  ELEMENT_DATA: Result[] = [];
  displayedColumns: string[] = ['Action','Id', 'Nombre', 'Ubicación', 'Especie'];
  dataSource :  MatTableDataSource<Result> = new MatTableDataSource(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private oRickandmortyService : RickandmortyService,
    private spinner: NgxSpinnerService,
    ){}

  ngOnInit(): void {
    this.getCharacter();
  }

  ngAfterViewInit() {
    
  }

  getCharacter(){
    this.spinner.show()
    this.oRickandmortyService.getCharacter().subscribe({
      next : (data) =>{
        this.ELEMENT_DATA = data.results
        this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
        this.dataSource.paginator = this.paginator;
      },
      error: ()=>{ console.log},
      complete : () => this.spinner.hide()
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  
}
