import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { allCountries } from '../editvendor/countries';
@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent {
  profileform:FormGroup;
  name:any;
  submitted:boolean = false
  email:any;
  phone:any;
  imgurl:any;
  file: any;
  files: any;
  selectedCountry : any = CountryISO.India;
  constructor(private router:Router,private fb:FormBuilder,private apiservice:ApiService,private toastr:ToastrService)
  {}
  ngOnInit()
  {
      this.getdata();
    }
    getdata()
    {
      this.profileform=this.fb.group({
        firstName:["",[Validators.required,Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]*$/i)]],
        lastName:["",[Validators.required,Validators.maxLength(15),Validators.pattern(/^[a-zA-Z ]*$/i)]],
        phoneNo :['', [Validators.required]],
        email : ['', [Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/)]],
      });
      this.apiservice.httpgetprofile().subscribe((res:any)=>{
    console.log('Get profile res',res);
    
       this.profileform.controls['firstName'].setValue(res.data.firstName);
       this.profileform.controls['lastName'].setValue(res.data.lastName);
       this.profileform.controls['email'].setValue(res.data.email);
      // this.profileform.controls['phoneNo'].setValue(res.data.dialCode);
       this.profileform.controls['phoneNo'].setValue(res.data.phoneNo);
       this.name=res.data.fullName;
       this.email=res.data.email;
       this.phone=res.data.phoneNo;
       this.imgurl="http://dev.webdevelopmentsolution.net:3008"+res.data.image;
       this.apiservice.searchdata();
       let findIndex = allCountries.find(x=>{
				const phone = res.data.dialCode.split('+');
				return x[2] == phone[1].trim();
			})
			this.selectedCountry = (findIndex != undefined)?findIndex[1]:CountryISO.India;
      });
    }
    
    update()
    {
      this.submitted = true
      let url = `/api/v1/admin/updateProfile`
   let  obj = {
        "firstName":  this.profileform.controls['firstName'].value,
        "lastName":this.profileform.controls['lastName'].value,
        // "gender":"MALE",
        // "country":"India",
        // "state":"Punjab",
        //  "city":"Mohali",
        //  "address":"apptunix",
        //  "latitude":"12345678",
        //  "longitude":"12345678",
        //  "birthDate":"10-10-10",
        "dialCode":this.profileform.controls['phoneNo'].value.dialCode,
        "image":this.files,
        "phoneNo":this.profileform.controls['phoneNo'].value.number,
       "email":this.profileform.controls['email'].value
        }
        if(this.profileform.valid){
          this.apiservice.putApi(url,obj).subscribe((res:any)=>{
            if(res.statusCode==200){
              this.submitted = false
              this.toastr.success(res.message)
              this.getdata()
              this.router.navigate(['dashboard']);
            }else{
             // this.toastr.error(res.message)
            }
          })
        }
    }
    phoneNoInput(event) {
      const charCode = event.which ? event.which : event.keyCode;
      if ((charCode >= 48 && charCode <= 57) || charCode == 43) {
        return true;
      }
      return false;
    }
    sendFile(fileData) {
      let url = `/api/v1/admin/uploadFile`
     let formdata = new FormData()
      formdata.append('file', fileData);
      this.apiservice.postApi(url,formdata).subscribe((res: any) => {
        console.log(res.data)
        if (res.statusCode==200) {
          // this.service.subject.next(true)
       this.toastr.success('File updated successfully')
          console.log("upload data res=>>", res.data)
          this.files = res.data.filePath
          this.imgurl="http://dev.webdevelopmentsolution.net:3008"+res.data.filePath;
        } else {
          this.toastr.error(res.message)
        }
      });
    }
    uploadFile(event) {
      if (event.target.files && event.target.files[0]) {
        var type = event.target.files[0].type;
        if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
          let fileData = event.target.files[0];
          this.sendFile(fileData)
           var reader = new FileReader()
           this.imgurl = reader.result; 
        }
      }
    }
    SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
	}
  
}
