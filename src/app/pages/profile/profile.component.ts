import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private fb:FormBuilder,private apiservice:ApiService,private router:Router)
  {}
  ngOnInit()
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
      this.apiservice.httpuploadfile(formdata).subscribe(res=>{
        this.ngOnInit();
      });
      //console.log(this.profileform.value);
      let data=this.profileform.value;
      this.apiservice.httpupdateprofile(data).subscribe(res=>{
        this.ngOnInit();
      });
      this.apiservice.search_value.next(true);
      
    }

}
