import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private url:UrlService,private http: HttpClient) { }
  httplogin(body:any):Observable<any>
  {
    return this.http.post<any>(this.url.login,body);
  }
  httpforget(body:any):Observable<any>
  {
    return this.http.post<any>(this.url.forgetpassword,body);
  }
  httpchange(body:any):Observable<any>
  {
    return this.http.post<any>(this.url.changepassword,body);
  }
  httpgetprofile():Observable<any>
  {
    return this.http.get<any>(this.url.getprofile);
  }
  httpupdateprofile(body:any)
  {
    return this.http.put<any>(this.url.updateprofile,body);
  }
}
