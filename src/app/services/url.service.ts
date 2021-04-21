import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
constructor() { }
baseUrl = "http://dev.webdevelopmentsolution.net:3008";
login = this.baseUrl+"/api/v1/admin/login";
forgetpassword=this.baseUrl+"/api/v1/admin/forgotPassword";
changepassword=this.baseUrl+"/api/v1/admin/changePassword";
getprofile=this.baseUrl+"/api/v1/admin/getProfile";
updateprofile=this.baseUrl+"/api/v1/admin/updateProfile";
}
