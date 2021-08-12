import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CmsService {

  baseURL = "http://dev.webdevelopmentsolution.net:3008/api/v1/";

  constructor(private http: HttpClient) {}

  // Get About
  getAbout() {
    return this.http.get<any>(`${this.baseURL}admin/pages/about`);
  }

  // Update About
  updateAbout(data){
    return this.http.put<any>(`${this.baseURL}admin/pages/about`, data)
  }



  // Get Privacy
  getPrivacy() {
    return this.http.get<any>(`${this.baseURL}admin/pages/privacy`);
  }

  // Update About
  updatePrivacy(data){
    return this.http.put<any>(`${this.baseURL}admin/pages/privacy`, data)
  }



  // Get Contact US
  getContact(){
    return this.http.get<any>(`${this.baseURL}admin/pages/contact`);
  }

  // Update Contact Us
  updateContact(data){
    return this.http.put<any>(`${this.baseURL}admin/pages/contact`, data)
  }



  // Get Terms
  getTerms(){
    return this.http.get<any>(`${this.baseURL}admin/pages/terms`);
  }

  // Update Terms
  updateTerms(data){
    return this.http.put<any>(`${this.baseURL}admin/pages/terms`, data)
  }
}
