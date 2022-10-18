import {Subject} from 'rxjs'
import {MatSnackBar} from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

export type SnackbarI = {
    message: string, 
    action: string | null | undefined, 
    duration: number
}

@Injectable()
export class UIService {
    loadingStateChange = new Subject<boolean>();

    constructor(private _snackBar: MatSnackBar ){}

    createSnackbar(snackbar: SnackbarI) {
        this._snackBar.open(snackbar.message, 
                            undefined, 
                            {duration: snackbar.duration}
        );
    }
    
}