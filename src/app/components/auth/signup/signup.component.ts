import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import {Subscription} from 'rxjs'
import { UIService } from '../../shared/ui.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate: Date;
  isLoading = false;
  loadingSub: Subscription;

  constructor(private authService: AuthService,
              private uiService: UIService) {
    this.maxDate = new Date();
   }

  ngOnInit(): void {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    this.loadingSub = this.uiService.loadingStateChange.subscribe(loading => {
      this.isLoading = loading;
    })
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
