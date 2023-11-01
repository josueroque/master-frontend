import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validLogin: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.validLogin = false;
  }

  onSubmit(formValues: NgForm) {
    const response = this.authService.login({
      username: formValues.value.username,
      password: formValues.value.password,
    });

    if (response) {
      this.validLogin = true;
      this.router.navigate(['/dashboard']);
    } else alert('Invalid Credentials!');
  }

  ngOnInit(): void {}
}
