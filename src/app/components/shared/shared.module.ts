import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MaterialModule } from "src/app/material.module";

@NgModule({
    imports: [ 
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        BrowserModule,],
    exports: [
        FormsModule,
        FlexLayoutModule,
        MaterialModule,
        BrowserModule,
    ],
})
export class SharedModule {

}