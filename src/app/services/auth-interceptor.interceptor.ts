import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {
  token: string;

  constructor(private spinner:NgxSpinnerService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
 // console.log("hi");
 this.token=sessionStorage.getItem('accessToken');
 this.spinner.show();
 let tokenizedReq=req.clone({
   setHeaders:{
     Authorization:`${this.token}`
   }
 })

 
 return next.handle(tokenizedReq).pipe(finalize( ()=>
 this.spinner.hide()

));
  }
}
