import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Subscription} from 'rxjs';
import { UIService } from '../../shared/ui.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  isLoading = false;
  loadingSub: Subscription;

  constructor(private authService: AuthService,
              private uiService: UIService,) {
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
      passwordFormControl: new FormControl('', [Validators.required])
    })
   }

  ngOnDestroy(): void {
    this.loadingSub.unsubscribe();
  }


  ngOnInit(): void {
    this.loadingSub = this.uiService.loadingStateChange.subscribe(loading => {
      this.isLoading = loading;
    })
  }

  submitForm() {
    const user = {
      email: this.loginForm.value.emailFormControl, 
      password: this.loginForm.value.passwordFormControl      
    }
    this.authService.login(user);   
    console.log(this.loginForm)
  }

  


  

}
