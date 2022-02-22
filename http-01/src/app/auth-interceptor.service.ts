import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log("request is going out");
    const modifiedReq = req.clone({
      headers: req.headers.append("auth-key", "123122223334"),
    });
    return next.handle(modifiedReq);
  }
}
