import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isLoggedObs: Observable<string> = this.authService.isLoggedObs();
  isLogged: any = this.authService.isLogged();
  constructor(public authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    this.isLoggedObs.subscribe((value) => {
      this.isLogged = value === 'logged' ? true : false;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
