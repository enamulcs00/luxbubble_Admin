import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit {
  file: any;
  imgurl:any;
  profile:any
  doc
  submitted:boolean = false
  files: any;
  docfile: any=[];
  constructor(private fb:FormBuilder,public service:ApiService,private toaster:ToastrService,private router:Router) { }
  ServiceProviderForm=this.fb.group({
    image:["",Validators.required],
    firstName:["",[Validators.required,Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]*$/i)]],
    lastName:["",[Validators.required,Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]*$/i)]],
    commission:['',Validators.required],
    commissionType:['',Validators.required],
    phoneNo :['', [Validators.required,Validators.maxLength(15),Validators.minLength(7),Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')]],
    email : ['', [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
    address:['',[Validators.required]],
    document:['',Validators.required],
  });
  ngOnInit(): void {
    this.ServiceProviderForm.controls['commissionType'].setValue('PERCENTAGE')
  }
    Add(){
       this.submitted = true
       let obj = {
        "firstName": this.ServiceProviderForm.controls['firstName'].value,
        "lastName": this.ServiceProviderForm.controls['lastName'].value,
        "image": this.files,
        "docImages":this.docfile,
        "commissionType": this.ServiceProviderForm.controls['commissionType'].value,
        "commission": this.ServiceProviderForm.controls['commission'].value.toString(),
        "email": this.ServiceProviderForm.controls['email'].value,
        "phoneNo": this.ServiceProviderForm.controls['phoneNo'].value,
        "dialCode": "+91",
        "address": this.ServiceProviderForm.controls['address'].value,
    }
      let url = `/api/v1/admin/addServiceProvider`
      if(this.ServiceProviderForm.valid){
        this.service.postApi(url,obj).subscribe((res:any)=>{
          if(res.statusCode==200){
            this.toaster.success(res.message)
           this.submitted = false
          this.router.navigate(['/pages/vendors'])
          this.ServiceProviderForm.reset()
          }
          });
      }
}
sendFile(fileData,ref) {
  let url = `/api/v1/admin/uploadFile`
 let formdata = new FormData()
  formdata.append('file', fileData);
  this.service.postApi(url,formdata).subscribe((res: any) => {
    console.log(res.data)
    if (res.statusCode==200) {
      
   this.toaster.success('File updated successfully')
      console.log("upload data res=>>", res.data)
      
      if(ref=='profile'){
        this.files = res.data.filePath
      }else if(ref=='doc'){
        this.docfile.push(res.data.filePath)
      }
    } else {
      this.toaster.error(res.message)
    }
  });
}
uploadFile(event,ref) {
  if(event.target.files && event.target.files[0]) {
    var type = event.target.files[0].type;
    if(ref=='profile'){
      this.profile = event.target.files[0].name
    }else if(ref=='doc'){
      this.doc+= event.target.files[0].name+", "
    }
    if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
      let fileData = event.target.files[0];
      this.sendFile(fileData,ref)
       var reader = new FileReader()
    }
  }
}
}

