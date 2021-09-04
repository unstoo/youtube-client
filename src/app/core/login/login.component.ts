import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/auth/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user?: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getData();
  }

  logout(): void {
    this.authService.logout();
  }

  login(): void {

  }

}
