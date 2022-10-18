import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output() toggleSideNavPanel = new EventEmitter<void>();
  suscription = new Subscription();
  isAutenticathed: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.suscription = this.authService.autenticathed.subscribe(autenticathed => {
      this.isAutenticathed = autenticathed;
    })
  }

  toggleSidenav() {
    this.toggleSideNavPanel.emit();
  }

  ngOnDestroy(): void {
    if (this.suscription) {
      this.suscription.unsubscribe()      
    }
  }

  logout() {
    this.authService.logout()
  }
}
