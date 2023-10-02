import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loading-image',
  templateUrl: './loading-image.component.html',
  styleUrls: ['./loading-image.component.scss']
})
export class LoadingImageComponent implements OnInit {
    viewImage : boolean = false;   
    @Input('url')  url!:string   

    @ViewChild('lImage') lImage! : ElementRef;
    
    constructor() { }

    ngOnInit() {
        
    }

    ngAfterViewInit() {
        
        this.lImage.nativeElement.onload=()=>{
            this.viewImage=true;                        
        }
        
        if(this.url){               
            this.viewImage=false;        
            // this.loadImage(this.url);  
            this.lImage.nativeElement.src = this.url;              
        }   
      }

    // loadImage(urlImage:string){
    //     console.log(urlImage)
    //     console.log(this.lImage.nativeElement)
    //     this.lImage.nativeElement.src = urlImage;        
    // }
}
