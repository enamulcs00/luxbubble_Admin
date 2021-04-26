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
  httpgetuser(search:any,filter:any,page:any,count:any):Observable<any>
  {
    return this.http.get<any>(`${this.url.getuser}?search=${search}&filter=${filter}&page=${page}&count=${count}`);
  }
  httpgetsevice(search:any,page:any,count:any):Observable<any>
  {
    return this.http.get<any>(`${this.url.serviceprovider}?search=${search}&page=${page}&count=${count}`);
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

  searchdata() {
    this.search_value.next(true);
  }
}
