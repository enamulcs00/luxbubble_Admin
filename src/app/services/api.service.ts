import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { UrlService } from './url.service';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public search_value = new Subject<any>();
  public $searchvalue = this.search_value.asObservable();
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
  httpupdateprofile(body:any):Observable<any>
  {
    return this.http.put<any>(this.url.updateprofile,body);
  }
  httpgetuser():Observable<any>
  {
    return this.http.get<any>(this.url.getuser);
  }
  httpuploadfile(body:any):Observable<any>
  {
    return this.http.post<any>(this.url.file,body);
  }
  httpupdateuser(body):Observable<any>
  {
    return this.http.put<any>(this.url.updateuser,body);
  }
  // searchdata() {
  //   this.search_value.next("12");
  // }
}
