import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { CurrentTrainingComponent } from "./current-training.component";

@Component({
    selector:'app-stop', 
    template: `<h1 mat-dialog-title>Trainning</h1>
                  <div mat-dialog-content>
                    <b>You have got {{passedData.progress}}%</b>
                    <p>Are you sure you want to give up?</p>
                  </div>
                  <div mat-dialog-actions>
                    <button mat-button [mat-dialog-close]="true">Yes</button>
                    <button mat-button [mat-dialog-close]="false">No</button>
                  </div>`,
    styleUrls: []
})
export class StopComponent {
    constructor(@Inject(MAT_DIALOG_DATA) public passedData: any) {}
}