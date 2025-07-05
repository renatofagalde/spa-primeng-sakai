import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { SecurityRoutingModule } from './security-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { LogoutService } from './logout.service';
import { LikwiHttp } from './likwi-http';
import {JwtHttpInterceptor} from './jwt-http-interceptor';


export function tokenGetter(): string | null {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SecurityRoutingModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['reqres.in'],
        disallowedRoutes: []
      }
    }),
    LoginFormComponent
  ],
  providers: [
    AuthGuard,
    AuthService,
    LogoutService,
    LikwiHttp,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtHttpInterceptor,
      multi: true
    }
  ]
})
export class SecurityModule { }
