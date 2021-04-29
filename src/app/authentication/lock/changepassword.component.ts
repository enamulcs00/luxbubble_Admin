import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import {CustomValidationService} from '../../services/custom-validation.service'
@Component({
  selector: 'app-changepassword',
  templateUrl: './changePassword.component.html'
})
export class changepasswordComponent {
  changepassForm:FormGroup;
  constructor(private fb:FormBuilder,private apiservice:ApiService,private router:Router,private toaster:ToastrService,private customvalidator:CustomValidationService) 
  {}
  ngOnInit()
  {
    this.changepassForm=this.fb.group({
      "oldPassword":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      "newPassword":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      "retypepassword":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    },{
     validator:this.customvalidator.passwordMatchValidator("newPassword","retypepassword")
    });
  }
  changepass()
  {
   let datapass=this.changepassForm.value;
   delete datapass.retypepassword;
   console.log(datapass);
   this.apiservice.httpchange(datapass).subscribe(res=>{
     console.log(res);
     if(res.message=="Password Changed Successfully")
     {
      this.toaster.success(res.message,'Change Password');
      this.router.navigate(['dashboard']);
     }
     else
     {
      this.toaster.error(res.message,'Change Password');
     }
   })
  }
  BackToDashboard()
  {
    this.router.navigate(['dashboard']);
  }
}
