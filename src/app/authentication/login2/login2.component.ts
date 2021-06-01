import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import{ApiService} from '../../services/api.service'
@Component({
  selector: 'app-login',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.scss']

})
export class Login2Component {
  loginForm:FormGroup;
  loginform = true;
  recoverform = false;
  email2 = new FormControl('',[Validators.required, Validators.email]);
  constructor(private fb:FormBuilder,private apiservice:ApiService,private router:Router,private toaster:ToastrService) { }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      rememberMe:new FormControl(false),
    });
    this.checkRememberMe();
  }
    onLogin()
    {
       
         let data=this.loginForm.value;
         delete data.rememberMe;
         let rememberMe=this.loginForm.controls['rememberMe'].value;
       this.apiservice.httplogin(data).subscribe(res=>{
         console.log(res.data.accessToken);
         if(res.message=="Account Login Successfully")
         {
           this.toaster.success(res.message,'Login');
           if (rememberMe) {
            let userData = this.loginForm.value;
            localStorage.setItem('rememberMe', JSON.stringify(userData))
          } else {
            localStorage.removeItem('rememberMe')
          }
           sessionStorage.setItem("accessToken",res.data.accessToken);
             this.router.navigate(['dashboard']);
         }
         else
         {
          this.toaster.error(res.message,'Login');
         }
       });
    }

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
  checkRememberMe() {

    if (localStorage.getItem('rememberMe')) {
      let userDetails = JSON.parse(localStorage.getItem('rememberMe'));
      this.loginForm.controls['email'].setValue(userDetails.email);
      this.loginForm.controls['password'].setValue(userDetails.password);
      this.loginForm.controls['rememberMe'].setValue("true");
    }
  }
  rememberFunc(e)
  {
    this.loginForm.controls['rememberMe'].setValue( e.target.checked);
  }
  forget()
  {
let body={'email':this.email2.value};
         console.log(body);
         this.apiservice.httpforget(body).subscribe(res=>{
           //console.log(res);
           if(res.message=="New Password Sent")
         {
           this.toaster.success(res.message,'Forget Password');
           sessionStorage.setItem("accessToken",res.data.accessToken);
            window.location.reload();
         }
         else
         {
          this.toaster.error(res.message,'Forget Password');
         }
         })
             
  }
}
