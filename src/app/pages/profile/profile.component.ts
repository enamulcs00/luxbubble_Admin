import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {
  profileform:FormGroup;
  name:any;
  email:any;
  phone:any;
  imgurl:any;
  file: any;
  constructor(private fb:FormBuilder,private apiservice:ApiService,private toastr:ToastrService)
  {}
  ngOnInit()
  {
      this.getdata();
    }
    getdata()
    {
      this.profileform=this.fb.group({
        firstName:["",Validators.required],
        lastName:["",Validators.required],
        email:["",[Validators.required,Validators.email]],
        phoneNo:["",Validators.required]
      });
      this.apiservice.httpgetprofile().subscribe(res=>{
       //console.log(res.data);
       this.profileform.controls['firstName'].setValue(res.data.firstName);
       this.profileform.controls['lastName'].setValue(res.data.lastName);
       this.profileform.controls['email'].setValue(res.data.email);
       this.profileform.controls['phoneNo'].setValue(res.data.phoneNo);
       this.name=res.data.fullName;
       this.email=res.data.email;
       this.phone=res.data.phoneNo;
       this.imgurl="http://dev.webdevelopmentsolution.net:3008"+res.data.image;
       this.apiservice.searchdata();
      });
    }
    upload(evt) 
    {
      console.log(evt);
      var files = evt.target.files;
      this.file=files[0];
      if(files && this.file)
      {
      var reader = new FileReader();
      reader.readAsDataURL(files[0]); 
      reader.onload = (_event) => { 
        this.imgurl = reader.result; 
      }
    }
    }
    update()
    {
      var formdata =new FormData();
      console.log(this.file);
      formdata.append('file',this.file);
      formdata.append('nature',"PROFILE_PIC");
      let data=this.profileform.value;
      this.apiservice.httpuploadfile(formdata).subscribe(res=>{
        this.apiservice.httpupdateprofile(data).subscribe(res=>{
          this.getdata();
          this.toastr.success(res.message,'Update');
        });
      });
    }
    phoneNoInput(event) {
      const charCode = event.which ? event.which : event.keyCode;
      if ((charCode >= 48 && charCode <= 57) || charCode == 43) {
        return true;
      }
      return false;
    }
}
