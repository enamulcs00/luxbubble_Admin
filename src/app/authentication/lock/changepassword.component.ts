import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changePassword.component.html'
})
export class changepasswordComponent {
  changepassForm:FormGroup;
  constructor(private fb:FormBuilder,private apiservice:ApiService,private router:Router,private toaster:ToastrService) {}
  ngOnInit()
  {
    this.changepassForm=this.fb.group({
      "oldPassword":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      "newPassword":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
      "retypepassword":["",[Validators.required, Validators.minLength(8), Validators.maxLength(16)]]
    })
  }
  changepass()
  {
   let datapass=this.changepassForm.value;
   delete datapass.retypepassword;
   console.log(datapass);
  }
}