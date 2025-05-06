import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from '../api/v1/api/api';
import { LoginModel, RegisterModel } from '../api/v1/model/models';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  service = inject(AuthService);

  login(loginModel: LoginModel): Observable<any> {
    return this.service.apiAuthLoginPost(loginModel);
  }

  register(registerModel: RegisterModel): Observable<any> {
    return this.service.apiAuthRegisterPost(registerModel);
  }
}
