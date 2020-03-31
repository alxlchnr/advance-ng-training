import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";
@Injectable()
export class AuthorizationInteceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.loginService.token) {
      const authHeader = "Bearer " + this.loginService.token;
      const newReq = req.clone({
        setHeaders: {
          Authorization: authHeader
        }
      });
      return next.handle(newReq);
    }
    return next.handle(req);
  }
}
