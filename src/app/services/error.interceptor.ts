import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private accountService: ApiService,private toastr:ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      return next.handle(request).pipe(catchError(err => {
          if ([401, 403].includes(err.status)) {
            
              this.toastr.error('Session expired','Please login',{
                timeOut: 3000,
              })
              this.accountService.logout();
              console.log('Called from Error Interceptor');
              
          }
 const error = err.error?.message || err.statusText;
          console.error(err);
          this.toastr.error(err,'',{
            timeOut: 3000,
          })
          return throwError(error);
      }))
  }
}
