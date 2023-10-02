import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Result } from 'src/app/shared/models/core/character.interface';
import { RickandmortyService } from 'src/app/shared/services/rickandmorty/rickandmorty.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SelectionModel } from '@angular/cdk/collections';
import { UtilService } from 'src/app/shared/util/util.service';



@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss']
})
export class ListCharacterComponent implements OnInit {

  
  ELEMENT_DATA: Result[] = [];
  displayedColumns: string[] = ['Select','Action','Id', 'Nombre', 'Ubicación', 'Especie'];
  dataSource :  MatTableDataSource<Result> = new MatTableDataSource(this.ELEMENT_DATA);
  selection = new SelectionModel<Result>(true, []);
  countSelect : Result[] = []
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  disabled = false;

  constructor(
    private oRickandmortyService : RickandmortyService,
    private spinner: NgxSpinnerService,
    public oUtilService: UtilService,

    ){}

  ngOnInit(): void {
    this.getCharacter();
    console.log(this.selection)
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

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  logSelection(row:Result) {
      this.countSelect.push(row)
      if(this.countSelect.length == 3){
        this.oUtilService.ShowError('No puede seleccionar mas de tres')
        this.disabled = true
      }

  }
  
}
