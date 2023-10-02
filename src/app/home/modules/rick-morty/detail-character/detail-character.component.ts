import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { switchMap } from 'rxjs';
import { Result } from 'src/app/shared/models/core/character.interface';
import { RickandmortyService } from 'src/app/shared/services/rickandmorty/rickandmorty.service';

@Component({
  selector: 'app-detail-character',
  templateUrl: './detail-character.component.html',
  styleUrls: ['./detail-character.component.scss'],
})
export class DetailCharacterComponent implements OnInit {
  character!: Result;
  idRoute!: any;
  urlImage!:string
  isLoading: boolean = false
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private oRickandmortyService: RickandmortyService,
    private spinner: NgxSpinnerService
  ) {}
  ngOnInit(): void {
    this.idRoute = this.activatedRoute.snapshot.paramMap.get('id');
    this.getCharacterById(this.idRoute);
    setTimeout(()=>{
      this.isLoading = true
    },200)
  }

  getCharacterById(id: number) {
    this.spinner.show()
    this.oRickandmortyService.getCharacterById(id).subscribe({
      next: (data: Result) => {
        this.character = data;
        this.urlImage = this.character.url

      },
      error: () => {
        this.router.navigate(['/list-character']);
        console.log;
      },
      complete: () => this.spinner.hide(),
    });
  }
  goBack(): void {
    this.router.navigateByUrl('/list-character');
  }
}
