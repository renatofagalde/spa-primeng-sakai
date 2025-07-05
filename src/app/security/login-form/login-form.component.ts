import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  blocked = false;
  error = '';

  constructor(
    private auth: AuthService,
    private router: Router,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Likwi - Login');
  }

  login(email: string, password: string) {
    this.blocked = true;
    this.error = '';

    this.auth.login(email, password)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(erro => {
        this.error = typeof erro === 'string' ? erro : 'Erro ao fazer login';
      })
      .finally(() => {
        this.blocked = false;
      });
  }
}
