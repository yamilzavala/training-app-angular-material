import { AuthData } from './auth-data.model';
import {User} from './user.model'
import { Subject } from 'rxjs';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';
// import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackbarI, UIService } from '../shared/ui.service';

@Injectable()
export class AuthService {
    autenticathed = new Subject<boolean>();
    private user: User = {email: '', userId:''};

    constructor(private router: Router,  
                private uiService: UIService){

    }

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        }
        this.uiService.loadingStateChange.next(true)
        if(authData.email === 'test@gmail.com' && authData.password == '123') {
            //to simulate loading
            setTimeout(() => {
                this.loginSuccess()
            }, 3000)            
        } else {
            this.openSnackBar()
        }
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        }
        this.uiService.loadingStateChange.next(true)
        if(authData.email === 'test@gmail.com' && authData.password == '123') {
            //to simulate loading            
            setTimeout(() => {
                this.loginSuccess()
            }, 3000)            
        } else {            
            this.openSnackBar()
        }

    }

    logout() {
        this.user = {email: '', userId:''};
        this.autenticathed.next(false);
        this.router.navigate(['/login'])
    }

    getUser() {
        return {...this.user}
    }

    isAuth() {
        return this.user.email != '' && this.user.userId != ''
    }

    loginSuccess() {      
        this.uiService.loadingStateChange.next(false)  
        this.autenticathed.next(true);
        this.router.navigate(['/training'])
    }

    openSnackBar() {
        this.uiService.loadingStateChange.next(false)
        const snackbar: SnackbarI = {
                message: 'Not allow to access! - Enter: Email: test@gmail.com- Pass: 123',
                action: undefined,
                duration: 5000 
        }
        this.uiService.createSnackbar(snackbar);
      }
}
  export class OutputPanal {}