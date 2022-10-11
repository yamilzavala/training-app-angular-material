import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      emailFormControl: new FormControl('', [Validators.required, Validators.email]),
      passwordFormControl: new FormControl('', [Validators.required])
    })
   }

 

  ngOnInit(): void {
  
  }

  submitForm() {
    const user = {
      email: this.loginForm.value.emailFormControl, 
      password: this.loginForm.value.passwordFormControl      
    }
    this.authService.registerUser(user);   
    console.log(this.loginForm)
  }

  


  

}
