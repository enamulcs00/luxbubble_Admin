import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.css']
})
export class EditvendorComponent implements OnInit {
  id: any;
  profile: any;
  doc: string;
  docfile: any=[];
  files: any;
submitted:boolean = false
  constructor(private router:Router,private fb:FormBuilder,private service:ApiService,private route:ActivatedRoute,private toaster:ToastrService) {
    this.route.queryParams.subscribe((params)=>{
      this.id = params.id;
    })}
    ServiceProviderForm=this.fb.group({
      image:[""],
      firstName:["",[Validators.required,Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      lastName:["",[Validators.required,Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      commission:['',Validators.required],
      commissionType:['',Validators.required],
      phoneNo :['', [Validators.required,Validators.maxLength(15),Validators.minLength(7),Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')]],
      email : ['', [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
      address:['',[Validators.required]],
      document:[''],
    });
  ngOnInit(): void {
    this.GetUser()
  }
  GetUser(){
    let url = `/api/v1/admin/viewServiceProvider/${this.id}`
    this.service.getApi(url).subscribe((res:any)=>{
      console.log("User data",res);
      if(res.statusCode==200){
        for(let doc of res.data.docImages){
          this.docfile.push(doc)
          this.doc+= doc.split('/').pop()+', '
        }
      this.profile = res.data.image.split('/').pop()
      this.ServiceProviderForm.controls['firstName'].setValue(res.data.firstName)
      this.ServiceProviderForm.controls['lastName'].setValue(res.data.lastName)
      this.ServiceProviderForm.controls['commission'].setValue(res.data.commission)
      this.ServiceProviderForm.controls['commissionType'].setValue(res.data.commissionType)
      this.ServiceProviderForm.controls['phoneNo'].setValue(res.data.phoneNo)
      this.ServiceProviderForm.controls['email'].setValue(res.data.email)
      this.ServiceProviderForm.controls['address'].setValue(res.data.address)
      // this.ServiceProviderForm.controls['image'].setValue(res.data.image)
      // this.ServiceProviderForm.controls['document'].setValue(this.docfile)
      }
    })
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
   let url = `/api/v1/admin/updateServiceprovider/${this.id}`
   if(this.ServiceProviderForm.valid && this.profile && this.doc){
     this.service.putApi(url,obj).subscribe((res:any)=>{
       if(res.statusCode==200){
        this.submitted = false
         this.toaster.success(res.message)
       this.router.navigate(['/pages/vendors'])
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
