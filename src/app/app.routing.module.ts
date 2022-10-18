import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./components/auth/auth.guard";
import { TrainingComponent } from "./components/training/training.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";

const routes: Routes = [
    {path: '', component: WelcomeComponent},

    {path: 'training', component: TrainingComponent, canActivate: [AuthGuard]},
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers:[AuthGuard]
})
export class AppRoutingModule {

}