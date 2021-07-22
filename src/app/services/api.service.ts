import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { UrlService } from './url.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public ImageUrl ="http://dev.webdevelopmentsolution.net:3008"
 public baseUrl = "http://dev.webdevelopmentsolution.net:3008";
  public regx = /^[\w',\-\.]+( [\w',\-\.]+)*$/u  //Prevent white space between words
  public search_value = new BehaviorSubject<boolean>(false);
  constructor(private url:UrlService,private http: HttpClient,private router:Router) { }
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
  postApi(url,data):Observable<any>
  {
    return this.http.post(this.url.baseUrl+url,data);
  }
  putApi(endPointURL,body){
    return this.http.put(this.url.baseUrl + endPointURL, body)
    }
    deleteApi(endPointURL){
      return this.http.delete(this.url.baseUrl + endPointURL)
     }
  logout()
  {
    sessionStorage.removeItem("accessToken");
    this.router.navigate(['/login'])
  }
  getApi(url):Observable<any>
  {
    return this.http.get<any>(this.url.baseUrl+url);
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
    }
}
