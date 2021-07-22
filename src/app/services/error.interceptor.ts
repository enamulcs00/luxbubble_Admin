import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { catchError, tap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private accountService: ApiService,private toastr:ToastrService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
      return next.handle(request).pipe(tap((evt:any) => {
     //   console.log('All response of apu',evt);
        
        if (evt instanceof HttpResponse) {
     //     console.log('Response instance',evt);
         if ([401, 403].includes(evt.body.statusCode)) {
           this.toastr.clear()
            this.toastr.error('Please login','Session expired',{
              timeOut: 3000,
            })
            this.accountService.logout();
            
        }else if(![401, 403,200].includes(evt.body.statusCode)){
          this.toastr.clear()
          this.toastr.error(evt.body.message || evt.statusText)
        }
     }}))
  }
}
