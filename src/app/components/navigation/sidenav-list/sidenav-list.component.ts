import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  suscription = new Subscription();
  isAuth: boolean = false;
  @Output() closeSidenavPanel = new EventEmitter<void>();

  constructor(private authService: AuthService) { }

  ngOnDestroy(): void {
    this.suscription.unsubscribe()
  }

  ngOnInit(): void {
    this.suscription = this.authService.autenticathed.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }

  closeSidenav() {
    this.closeSidenavPanel.emit();
  }

  logout() {
    this.closeSidenav();
    this.authService.logout()
  }

}
