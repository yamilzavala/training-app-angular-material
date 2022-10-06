import { NgModule } from "@angular/core";

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
    imports:[ MatButtonModule,
              MatIconModule,
              MatInputModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatCheckboxModule,
              MatNativeDateModule,
              MatSidenavModule,
              MatToolbarModule],
    exports: [MatButtonModule,
              MatIconModule,
              MatInputModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatCheckboxModule,
              MatNativeDateModule,
              MatSidenavModule,
              MatToolbarModule],
              
})
export class MaterialModule {

}