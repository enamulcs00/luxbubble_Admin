import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UrlService } from './url.service';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public search_value = new BehaviorSubject<boolean>(false);
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
  httpgetuser(body:any):Observable<any>
  {
    return this.http.post<any>(this.url.getuser,body);
  }
  httpgetsevice(body:any,page:any,count:any):Observable<any>
  {
    return this.http.post<any>(`${this.url.serviceprovider}?page=${page}&limit=${count}`,body);
  }
  httpuploadfile(body:any):Observable<any>
  {
    return this.http.post<any>(this.url.file,body);
  }
  httpupdateuser(body,id):Observable<any>
  {
    return this.http.put<any>(this.url.updateuser+id,body);
  }
  HttpDeleteUser(id):Observable<any>
  {
    return this.http.delete<any>(this.url.deleteuser+id);
  }
  HttpGetOneUser(id):Observable<any>
  {
    return this.http.get<any>(this.url.GetOneUser+id);
  }
  HttpUpdateServiceProvider(body,id):Observable<any>
  {
    return this.http.put<any>(this.url.updateServiceprovider+id,body);
  }
  searchdata() {
    this.search_value.next(true);
  }
}
