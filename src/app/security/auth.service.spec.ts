import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  let jwtHelper: JwtHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        JwtHelperService
      ]
    });

    service = TestBed.inject(AuthService);
    jwtHelper = TestBed.inject(JwtHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login successfully', async () => {
    const email = 'eve.holt@reqres.in';
    const password = 'cityslicka';

    // Mock do localStorage
    spyOn(localStorage, 'setItem');

    await expectAsync(service.login(email, password)).toBeResolved();
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
