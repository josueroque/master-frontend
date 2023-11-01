import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isLoggedObs: Observable<string> = this.authService.isLogged();
  isLogged: any = false;
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    this.isLoggedObs.subscribe((value) => {
      this.isLogged = value === 'added' ? true : false;
    });
  }
}
