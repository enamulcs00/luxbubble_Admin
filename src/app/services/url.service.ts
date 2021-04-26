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
getuser=this.baseUrl+"/api/v1/admin/getUser";
file=this.baseUrl+"/api/v1/admin/uploadFile";
updateuser=this.baseUrl+"/api/v1/admin/updateUser/";
deleteuser=this.baseUrl+"/api/v1/admin/deleteUser/";
serviceprovider=this.baseUrl+"/api/v1/admin/getServiceprovider";
}
