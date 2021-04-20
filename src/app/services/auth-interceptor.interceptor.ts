import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  token: string;

  constructor() {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
 // console.log("hi");
 this.token=sessionStorage.getItem('accessToken');
 
 //console.log(this.token);
 let tokenizedReq=req.clone({
   setHeaders:{
     Authorization:`${this.token}`
   }
 })
 console.log("interceptor");
 
 return next.handle(tokenizedReq);
  }
}
