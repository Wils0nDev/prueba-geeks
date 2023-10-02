import { Component, Input } from '@angular/core';
import { Result } from 'src/app/shared/models/core/character.interface';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() character!: Result;
  constructor(private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.spinner.show()
    if(this.character === undefined){
      this.spinner.show()
    }
    //if ( !this.character ) throw Error('Hero property is required');
  }
}
