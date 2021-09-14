import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user?: User | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getData().subscribe((user) => this.user = user);
  }

  logout(): void {
    this.authService.logout();
  }

  login(): void {

  }

}
