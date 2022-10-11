import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate: Date;

  constructor(private authService: AuthService) {
    this.maxDate = new Date();
   }

  ngOnInit(): void {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18)
  }

  submit(form: NgForm) {
      const user = {
        email: form.value.email, 
        password: form.value.password
      }
      this.authService.registerUser(user)
      console.log(form)
   
  }
}
