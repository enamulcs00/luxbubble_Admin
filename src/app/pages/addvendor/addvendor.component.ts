import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit {
  @ViewChild("placeRef") placesRef: GooglePlaceDirective;
  file: any;
  imgurl:any;
  profile:any
  doc
  submitted:boolean = false
  files: any;
  docfile: any=[];
  lng: any;
  lat: any;
  constructor(private fb:FormBuilder,public service:ApiService,private toaster:ToastrService,private router:Router) { }
  ServiceProviderForm=this.fb.group({
    image:["",Validators.required],
    firstName:["",[Validators.required,Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]*$/i)]],
    lastName:["",[Validators.required,Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]*$/i)]],
    commission:['',Validators.required],
    commissionType:['',Validators.required],
    phoneNo :['', [Validators.required]],
    email : ['', [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
    address:['',[Validators.required]],
    document:[''],
  });
  ngOnInit(): void {
    this.ServiceProviderForm.controls['commissionType'].setValue('PERCENTAGE')
  }
    Add(){
      console.log('Form dataild',this.ServiceProviderForm.value);
      
       this.submitted = true
       let obj = {
        "firstName": this.ServiceProviderForm.controls['firstName'].value,
        "lastName": this.ServiceProviderForm.controls['lastName'].value,
        "image": this.files,
        "docImages":this.docfile,
        "commissionType": this.ServiceProviderForm.controls['commissionType'].value,
        "commission": this.ServiceProviderForm.controls['commission'].value.toString(),
        "email": this.ServiceProviderForm.controls['email'].value,
        "phoneNo": this.ServiceProviderForm.controls['phoneNo'].value.number,
        "dialCode": this.ServiceProviderForm.controls['phoneNo'].value.dialCode,
        "address": this.ServiceProviderForm.controls['address'].value,
    }
      let url = `/api/v1/admin/addServiceProvider`
      if(this.ServiceProviderForm.valid && this.docfile){
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
        //this.docfile.push(res.data.filePath)
        this.docfile.length < 5 && !this.docfile.includes(res.data.filePath)?this.docfile.push(res.data.filePath):alert(this.docfile.length===5?'Maximum 5 files can be upload!':'This item has already been added'
        )}
    } else {
      this.toaster.error(res.message)
    }
  });
}
Remove(index){
  this.docfile.splice(index,1);
}
uploadFile(event,ref) {
  
  console.log("Evnt",event);
  var type = event.target.files[0].type;
  if(event.target.files && event.target.files[0] && type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
   // var type = event.target.files[0].type;
   console.log('Called from file type');
   
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
  }else{
    this.toaster.error('File must be Jpg, Jpeg, Png','Error')
  }
}
public AddressChange(address: any,ref) {
  console.log(address);
 //setting address from API to local variable
 
 this.ServiceProviderForm.get('address').setValue(ref)
 // console.log(address.formatted_address);
  this.lat = address.geometry.location.lat()
  this.lng = address.geometry.location.lng()
}
SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}
}

