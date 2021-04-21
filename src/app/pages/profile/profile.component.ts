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
      email:["",Validators.required],
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
     this.imgurl=res.data.image;
    });
    }
    upload(evt) 
    {
      console.log(evt);
      var files = evt.target.files;
      this.file=files[0];
      if(files)
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
      //console.log("updated");
      let formdata =new FormData();
      formdata.append('firstName',this.profileform.controls['firstName'].value);
      formdata.append('lastName',this.profileform.controls['lastName'].value);
      formdata.append('email',this.profileform.controls['email'].value);
      formdata.append('phoneNo',this.profileform.controls['phoneNo'].value);
      formdata.append('image',this.file);
      console.log(formdata);
      this.apiservice.httpupdateprofile(formdata).subscribe(res=>{
      console.log(res);
      });
      console.log(this.profileform.value); 

    }

}
