import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.css']
})
export class AddvendorComponent implements OnInit {
  file: any;
  imgurl:any;
  ServiceProviderForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  this.DataList();
  }
  DataList()
  {
    this.ServiceProviderForm=this.fb.group({
      image:[""],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      commission:[],
      phoneNo:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      address:[],
      documents:[],
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
}
