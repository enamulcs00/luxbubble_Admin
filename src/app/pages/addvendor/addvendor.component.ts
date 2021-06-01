import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validateEvents } from 'calendar-utils';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit,AfterViewInit {
  file: any;
  imgurl:any;
  profile:any
  doc
  submitted:boolean = false
  constructor(private fb:FormBuilder,public service:ApiService,private toaster:ToastrService,private router:Router) { }
  ServiceProviderForm=this.fb.group({
    image:[""],
    firstName:["",[Validators.required,Validators.maxLength(15),Validators.pattern("^(?=.{1,50}$)[a-zA-Z]+(?:['_.\s][a-zA-Z]+)*$")]],
    lastName:["",[Validators.required,Validators.maxLength(15),Validators.pattern("^(?=.{1,50}$)[a-zA-Z]+(?:['_.\s][a-zA-Z]+)*$")]],
    commission:['',Validators.required],
    commissionType:['',Validators.required],
    phoneNo :['', [Validators.required,Validators.maxLength(15),Validators.minLength(7),Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$')]],
    email : ['', [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
    address:['',[Validators.required,Validators.pattern(this.service.regx)]],
 //   documents:[''],
  });
  ngOnInit(): void {
  
  }
  ngAfterViewInit(){
    this.ServiceProviderForm.controls['commissionType'].setValue('PERCENTAGE')
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
    Add(){

      this.submitted = true
      let url = `/api/v1/admin/addServiceProvider`
      if(this.ServiceProviderForm.valid){
        this.service.postApi(url,this.ServiceProviderForm.value).subscribe((res:any)=>{
          if(res.statusCode==200){
            this.toaster.success(res.message)
           this.submitted = false
          this.router.navigate(['/pages/vendors'])
          this.ServiceProviderForm.reset()
          }
          });
      }
}
    }

