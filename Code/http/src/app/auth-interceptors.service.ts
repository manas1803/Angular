import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import {tap} from 'rxjs/operators';

export class AuthInterceptorsService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Auth Interceptor");
    const modifiedRequest = req.clone({
      headers:req.headers.append('authKey','Manas')
    })
    return next.handle(modifiedRequest);
  }
}
