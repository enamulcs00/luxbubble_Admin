import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router, Routes } from "@angular/router";
import { NgForm, FormGroup, FormControl } from "@angular/forms";
import { FormBuilder, Validators } from "@angular/forms";
import { CmsService } from "src/app/services/cms.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-terms",
  templateUrl: "./terms.component.html",
  styleUrls: ["./terms.component.css"],
})
export class TermsComponent implements OnInit {
  aboutForm: FormGroup;
  legal: any;
  submitted: boolean = false;
  AboutFlag: any;

  constructor(
    private route: ActivatedRoute,
    private _route: Router,
    private Srvc: CmsService,
    private formBuilder: FormBuilder
  ) {
    this.aboutForm = formBuilder.group({
      data: ["", [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.Srvc.getTerms().subscribe((res: any) => {
      if (res.statusCode == 401) {
        Swal.fire("Oops", "Session is Terminated", "error");
        sessionStorage.removeItem("token");
        this._route.navigate(["/login"]);
      }
      if (res.statusCode == 200) {
        this.legal = res.data.data.legal;
        this.aboutForm.controls["data"].setValue(this.legal);
      }
    });
  }

  public errorHandling = (control: string, error: string) => {
    return this.aboutForm.controls[control].hasError(error);
  };

  update() {
    this.submitted = true;
    if (this.aboutForm.valid) {
      const body = {
        data: {
          legal: this.aboutForm.controls["data"].value,
        },
      };
      this.Srvc.updateTerms(body).subscribe((res: any) => {
        if (res.statusCode == 200) {
          this.submitted = false;
          Swal.fire("Updated", "Terms & Conditions Successfully Updated", "success");
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

  avoidBlankSpace(e, ref) {
    if (!ref.length) {
      e.preventDefault();
    }
  }
}
