import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import {allCountries} from 'src/app/pages/editvendor/countries'
@Component({
  selector: 'app-editvendor',
  templateUrl: './editvendor.component.html',
  styleUrls: ['./editvendor.component.css']
})
export class EditvendorComponent implements OnInit {
  @ViewChild("placeRef") placesRef: GooglePlaceDirective;
  id: any;
  profile: any;
  doc: string;
  docfile: any=[];
  files: any;
submitted:boolean = false
  lng: any;
  lat: any;
  selectedCountry : any = CountryISO.India;
  constructor(private router:Router,private fb:FormBuilder,private service:ApiService,private route:ActivatedRoute,private toaster:ToastrService) {
    this.route.queryParams.subscribe((params)=>{
      this.id = params.id;
    })}
    ServiceProviderForm=this.fb.group({
      image:[""],
      firstName:["",[Validators.required,Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      lastName:["",[Validators.required,Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]*$/i)]],
      // commission:['',Validators.required],
      // commissionType:['',Validators.required],
      phoneNo :['', [Validators.required]],
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
        for(var doc of res.data.docImages){
          this.docfile.push(doc)
          this.doc+= doc.split('/').pop()+', '
        }
        
      this.profile = res.data.image.split('/').pop()
      this.ServiceProviderForm.controls['firstName'].setValue(res.data.firstName)
      this.ServiceProviderForm.controls['lastName'].setValue(res.data.lastName)
      // this.ServiceProviderForm.controls['commission'].setValue(res.data.commission)
      // this.ServiceProviderForm.controls['commissionType'].setValue(res.data.commissionType)
      this.ServiceProviderForm.controls['phoneNo'].setValue(res.data.phoneNo)
      this.ServiceProviderForm.controls['email'].setValue(res.data.email)
      this.ServiceProviderForm.controls['address'].setValue(res.data.address)
      let findIndex = allCountries.find(x=>{
				const phone = res.data.dialCode.split('+');
				return x[2] == phone[1].trim();
			})
			this.selectedCountry = (findIndex != undefined)?findIndex[1]:CountryISO.India;
      // this.ServiceProviderForm.controls['image'].setValue(res.data.image)
      // this.ServiceProviderForm.controls['document'].setValue(this.docfile)
      console.log('Get form',this.ServiceProviderForm.controls['phoneNo'],this.ServiceProviderForm.controls['phoneNo'].value.number,res);
      
      }
    })
    console.log('form',this.ServiceProviderForm.controls['phoneNo'].value.dialCode);
    
  } 
  Remove(index){
    this.docfile.splice(index,1);
  }
  Add(){
    console.log('Form',this.ServiceProviderForm.value);
    
    this.submitted = true
    let obj = {
     "firstName": this.ServiceProviderForm.controls['firstName'].value,
     "lastName": this.ServiceProviderForm.controls['lastName'].value,
     "image": this.files,
     "docImages":this.docfile,
    //  "commissionType": this.ServiceProviderForm.controls['commissionType'].value,
    //  "commission": this.ServiceProviderForm.controls['commission'].value.toString(),
     "email": this.ServiceProviderForm.controls['email'].value,
     "phoneNo": this.ServiceProviderForm.controls['phoneNo'].value.number,
     "dialCode": this.ServiceProviderForm.controls['phoneNo'].value.dialCode,
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
    this.docfile.length < 5 && !this.docfile.includes(res.data.filePath)?this.docfile.push(res.data.filePath):alert(this.docfile.length===5?'Maximum 5 files can be upload!':'This item has already been added'
    )
   }
 } else {
   this.toaster.error(res.message)
 }
});
}
uploadFile(event,ref) {
  var type = event.target.files[0].type;
if(event.target.files && event.target.files[0] && type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
 
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
