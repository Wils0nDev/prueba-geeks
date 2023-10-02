import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { EnumSnackBarType, SnackBarData } from './interfaces/snackbar-data.interface'

@Component({
  selector: 'snackbar',
  templateUrl: 'snackbar.component.html',
  styleUrls: ['./snackbar.component.css'],
})
export class SnackBarComponent {

  snackbarData: SnackBarData;
  constructor(
    public matSnackbarRef: MatSnackBarRef<SnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) private data: SnackBarData
    ) {
      this.snackbarData = {...data};
  }


  getTypeClass = (): string => {
    if(this.snackbarData.Type === EnumSnackBarType.SUCCESS){ return 'success-label' }
    else if(this.snackbarData.Type === EnumSnackBarType.ERROR){ return 'error-label' }
    else if(this.snackbarData.Type === EnumSnackBarType.WARNING){ return 'warning-label' }
    else if(this.snackbarData.Type === EnumSnackBarType.INFO){ return 'info-label' }
    return '';
  }

  getTypeIcon = (): string => {
    if(this.snackbarData.Type === EnumSnackBarType.SUCCESS){ return 'check_circle' }
    else if(this.snackbarData.Type === EnumSnackBarType.ERROR){ return 'warning' }
    else if(this.snackbarData.Type === EnumSnackBarType.WARNING){ return 'warning' }
    else if(this.snackbarData.Type === EnumSnackBarType.INFO){ return 'info' }
    return '';
  }

}
