import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { CmsService } from "src/app/services/cms.service";
import Swal from "sweetalert2";


@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.css']
})
export class PrivacyComponent implements  OnInit {
  privacyForm: FormGroup;
  privacy: any;
  submitted: boolean = false;
  privacyFlag: any;

  constructor(
    private route: ActivatedRoute,
    private _route: Router,
    private Srvc: CmsService,
    private formBuilder: FormBuilder
  ) {
    this.privacyForm = formBuilder.group({
      data: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.getData();
    this.privacyFlag=(JSON.parse(sessionStorage.getItem("permission"))==null?true:JSON.parse(sessionStorage.getItem("permission"))["CMS Pages"].modify);
  }

  // Error Handling
  public errorHandling = (control: string, error: string) => {
    return this.privacyForm.controls[control].hasError(error);
  };

  // Get Privacy Data
  getData() {
    this.Srvc.getPrivacy().subscribe((res: any) => {
      if (res.statusCode == 401) {
        Swal.fire("Oops", "Session is Terminated", "error");
        sessionStorage.removeItem("token");
        this._route.navigate(["/login"]);
      }
      if (res.statusCode == 200) {
        this.privacy = res?.data?.data?.privacy;
        this.privacyForm.controls["data"].setValue(this.privacy);
      }
    });
  }

  // Update Privacy
  update() {
    this.submitted = true;
    if (this.privacyForm.valid) {
      const body = {
        data: {
          privacy: this.privacyForm.controls["data"].value,
        },
      };
      this.Srvc.updatePrivacy(body).subscribe((res: any) => {
        if (res.statusCode == 200) {
          this.submitted = false;
          Swal.fire(
            "Updated",
            "Privacy Policy Successfully Updated",
            "success"
          );
          this.getData();
          // this.Srvc.searchdata();
        } else {
          Swal.fire("Oops", res.message, "error");
        }
      });
    } else {
      Swal.fire("Oops", "Something went wrong", "error");
    }
  }

  doSomething(e, ref) {
    if (!ref.length) {
      e.preventDefault();
    }
  }

}
