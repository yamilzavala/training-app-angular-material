import { AuthData } from './auth-data.model';
import {User} from './user.model'
import { Subject } from 'rxjs';
import {Router} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    autenticathed = new Subject<boolean>();
    private user: User = {email: '', userId:''};

    constructor(private router: Router){

    }

    registerUser(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        }
        this.loginSeccess()
    }

    login(authData: AuthData) {
        this.user = {
            email: authData.email,
            userId: Math.round(Math.random() * 1000).toString()
        }
       this.loginSeccess()
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

    loginSeccess() {
        this.autenticathed.next(true);
        this.router.navigate(['/training'])
    }


}