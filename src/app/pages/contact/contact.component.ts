import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { CmsService } from "src/app/services/cms.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  contact: any;
  email:any;
  address:any;
  submitted: boolean = false;
  ContactFlag: any;

  constructor(
    private route: ActivatedRoute,
    private _route: Router,
    private Srvc: CmsService,
    private formBuilder: FormBuilder
  ) {
    this.contactForm = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      contact: ["",[Validators.required,Validators.minLength(8),Validators.maxLength(14)]],
      address: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(550)]]
    });
  }

  ngOnInit(): void {
    this.getData();
   this.ContactFlag=(JSON.parse(sessionStorage.getItem("permission"))==null?true:JSON.parse(sessionStorage.getItem("permission"))["CMS Pages"].modify);
  }

  getData() {
    this.Srvc.getContact().subscribe((res: any) => {
      if (res.statusCode == 401) {
        Swal.fire("Oops", "Session is Terminated", "error");
        sessionStorage.removeItem("token");
        this._route.navigate(["/login"]);
      }
      if (res.statusCode == 200) {
        this.email = res.data.data.email;
        this.contact = res.data.data.contact;
        this.address = res.data.data.address;
        this.contactForm.controls["contact"].setValue(this.contact);
        this.contactForm.controls["email"].setValue(this.email);
        this.contactForm.controls["address"].setValue(this.address);
      }
    });
  }

  update() {
    this.submitted = true;
    if (this.contactForm.valid) {
      const body = {
        data: {
          email: this.contactForm.controls["email"].value,
          contact: this.contactForm.controls["contact"].value,
          address: this.address,
        },
      };
      if (!this.address){
        body.data.address = this.contactForm.controls["address"].value
      }
      console.log(body);
      // return
      this.Srvc.updateContact(body).subscribe((res: any) => {
        if (res.statusCode == 200) {
          this.submitted = false;
          Swal.fire("Updated", "Details updated successfully", "success");
          this.getData();
          // this.Srvc.searchdata();
        } else {
          Swal.fire("Oops", res.message, "error");
        }
      });
    }
    else{
      Swal.fire('Oops','Something went wrong','error');
    }
  }

  phoneNoInput(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if ((charCode >= 48 && charCode <= 57) || charCode == 43) {
      return true;
    }
    return false;
  }

  //Address AutoComplete
  public AddressChange(address: any) {
    this.address = address.formatted_address;
    // this.lat = address.geometry.location.lat();
    // this.lng = address.geometry.location.lng();
  }

  public errorHandling = (control: string, error: string) => {
    return this.contactForm.controls[control].hasError(error);
  };

  doSomething(e, ref) {
    if (!ref.length) {
      e.preventDefault();
    }
  }

}
