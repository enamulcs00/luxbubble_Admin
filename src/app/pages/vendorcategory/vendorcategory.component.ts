import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vendorcategory',
  templateUrl: './vendorcategory.component.html',
  styleUrls: ['./vendorcategory.component.css']
})
export class VendorcategoryComponent implements OnInit {
  active = 1;
  baseURL: string;
  categories: any;
  subCategoryData: any;
  imageSub: string;
  text: string;
  file: any;
  addCategoryFlag: boolean;
  imageSizeError: boolean;
  fileAttached: boolean;
  imageFile: any;
  submitted: boolean = false;
  deleteId: any;
  localID: any;
  viewData: any;
  editText: any;
  editSubID: any;
  parentID: any;
  foodFlag: any;
  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    public Srvc:ApiService,
    private router:Router
  ) {}
  ngOnInit(): void {
   this.foodFlag=(JSON.parse(sessionStorage.getItem("permission"))==null?true:JSON.parse(sessionStorage.getItem("permission")).Categories.modify);
    this.getCategories();
  }

  // Get Vendors
  getCategories() {
    this.baseURL="http://dev.webdevelopmentsolution.net:8888";
    this.Srvc.getApi(this.baseURL).subscribe((data: any) => {
      if (data.statusCode == 401) {
        this.sessionTerminate();
      }
      if (data.statusCode == 200) {
        this.categories = data.data;
      } else {
        this.toastr.error(data.message, "Error", {
          timeOut: 2000,
        });
      }
    });
  }

  // Get SubCategory
  getSubCategory(id) {
    this.localID=id;
    this.parentID = id;
    this.baseURL="http://dev.webdevelopmentsolution.net:8888";
    this.Srvc.getApi(id).subscribe((res: any) => {
      if (res.statusCode == 401) {
        this.sessionTerminate();
      }
      if (res.statusCode == 200) {
        this.subCategoryData = res.data;
        this.imageSub = this.baseURL + res.data.uploadImage;
      } else {
        this.toastr.error(res.message, "Error", {
          timeOut: 2000,
        });
      }
    });
  }

  // Add Category Form
  addCategoryForm = this.formBuilder.group({
    name: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
    description: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(100)],
    ],
    image: [""],
  });

  // Add SubCategory Form
  addSubCategoryForm = this.formBuilder.group({
    name2: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
    image2: ["", []],
  });

  // Add Category
  sendDetails() {
    this.submitted = true;
    if (this.addCategoryForm.valid) {
      if (this.imageFile) {
        let obj = {
          name: this.addCategoryForm.value.name,
          description: this.addCategoryForm.value.description,
          image: this.imageFile,
        };
        this.Srvc.postApi(obj,this.baseURL).subscribe((data: any) => {
          if (data.statusCode == 401) {
            this.sessionTerminate();
          }
          if (data.statusCode == 200) {
            this.modalService.dismissAll();
            this.addCategoryForm.reset();
            this.imageFile = null;
            this.text = "Choose File";
            this.getCategories();
            this.submitted = false;
          } else {
            this.addCategoryFlag = true;
          }
        });
      } else {
        this.toastr.error("Please choose Category image", "Error", {
          timeOut: 2000,
        });
      }
    } else {
      this.toastr.error("Please enter all the required fields", "Error", {
        timeOut: 2000,
      });
    }
  }

  // Add Sub Category
  sendSubDetails() {
    this.submitted = true;
    if (this.addSubCategoryForm.valid) {
      if (this.imageFile) {
        let obj = {
          name: this.addSubCategoryForm.value.name2,
          image: this.imageFile,
          parent: this.localID,
        };

        this.Srvc.postApi(obj,'').subscribe((data: any) => {
          if (data.statusCode == 401) {
            this.sessionTerminate();
          }
          if (data.statusCode == 200) {
            this.modalService.dismissAll();
            
            this.addCategoryForm.reset();
            this.text = "Choose File";
            this.submitted = false;
            this.addSubCategoryForm.reset();
            this.getCategories();
            this.getSubCategory(this.localID);
          } else {
            this.toastr.error(data.message, "Error", {
              timeOut: 2000,
            });
            this.addCategoryFlag = true;
          }
        });
      } else {
        this.toastr.error("Please choose Sub Category image", "Error", {
          timeOut: 2000,
        });
      }
    } else {
      this.toastr.error("Please enter all the required fields", "Error", {
        timeOut: 2000,
      });
    }
  }

  // Error Handling Category Add
  public errorHandlingAddCategory = (control: string, error: string) => {
    return this.addCategoryForm.controls[control].hasError(error);
  };

  // Error Handling Sub Category Add
  public errorHandlingAddSubCategory = (control: string, error: string) => {
    return this.addSubCategoryForm.controls[control].hasError(error);
  };

  // Error Handling Edit Category
  public errorHandlingEditCategory = (control: string, error: string) => {
    return this.editCategoryForm.controls[control].hasError(error);
  };

  // Avoid Empty Space
  doSomething(e, ref) {
    if (!ref.length) {
      e.preventDefault();
    }
  }

  // Image Select
  onImageSelect(e) {
    var files = e.target.files;

    if (files[0].size <= 1000000) {
      this.file = files[0];
      let formData = new FormData();
      formData.append("file", this.file);
      this.Srvc.postApi(formData,'').subscribe((res: any) => {
        if (res.statusCode == 401) {
          this.sessionTerminate();
        }
        if (res.statusCode == 200) {
          this.imageFile = res.data.filePath;
          this.toastr.success("Image Selected");

          this.text = e.target.files[0].name;
          this.imageSizeError = false;
          this.fileAttached = true;
        } else {
          this.toastr.error(res.message, "Error", {
            timeOut: 2000,
          });
        }
      });
    } else {
      this.file = null;
      this.text = "Choose File";
      this.imageSizeError = true;
    }
  }

  // Delete Category
  deleteCategory() {
    const body = {};
    this.Srvc.deleteApi(this.deleteId).subscribe((data: any) => {
      if (data.statusCode == 200) {
        this.getCategories();
        this.getSubCategory(this.localID);
        this.modalService.dismissAll();
        
      } else {
        this.toastr.error(data.message, "Error", {
          timeOut: 2000,
        });
      }
    });
  }

  // Logout if Token Expire
  sessionTerminate() {

    sessionStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }

  deleteBoxModal(userDelete) {

    this.modalService.open(userDelete, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "sm",
    });
  }

  addUserModal(addUser) {
    this.modalService.open(addUser, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    });
  }

  editCategoryForm = this.formBuilder.group({
    editName: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
    editDescription: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(100)],
    ],
  });

  editSubCategoryForm = this.formBuilder.group({
    editSubName: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(15)],
    ],
  });

  editBoxModal(editModel, id) {
    this.localID = id;
    this.Srvc.getApi(this.localID).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.viewData = res.data;
        this.editCategoryForm.controls["editName"].setValue(this.viewData.name);
        this.editCategoryForm.controls["editDescription"].setValue(
          this.viewData.description
        );
        if (res.data.image == "") {
          this.text = "Choose File";
        }
        if (res.data.image != "") {
          this.text = "Image.jpg";
        }
      }
    });
    this.modalService.open(editModel, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    });
  }

  // Edit Category
  editCategoryData() {
    this.submitted = true;
    if (this.editCategoryForm.valid) {
      let obj = {
        name: this.editCategoryForm.value.editName,
        description: this.editCategoryForm.value.editDescription,
        image: this.imageFile,
      };
      if (!this.imageFile) {
        delete obj.image;
      }
      console.log(obj);
      // return;
      this.Srvc.putApi(this.localID, obj).subscribe((data: any) => {
        if (data.statusCode == 200) {
        
          this.modalService.dismissAll();
          this.getCategories();
          this.fileAttached = false;
          this.text = "Choose File";
          this.imageFile = null;
          this.submitted = false;
        } else {
          this.toastr.error(data.message, "Error", {
            timeOut: 2000,
          });
          this.getCategories();
          this.modalService.dismissAll();
          this.fileAttached = false;
          this.submitted=false;
          this.imageFile = null;
        }
      });
    } else {
      this.toastr.error("Please enter all the required fields", "Error", {
        timeOut: 2000,
      });
    }
  }
  addsubCategoryModel(addsubCategory, id) {
    this.localID = id;
    this.modalService.open(addsubCategory, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    });
  }
  addCategoryModel(addCategory) {
    this.text = "Choose File";
    this.modalService.open(addCategory, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    });
  }

editBoxModal1(editSubModel) {
    
    this.Srvc.getApi(this.localID).subscribe((res: any) => {
      if (res.statusCode == 200) {
        this.viewData = res.data;
        this.editSubCategoryForm.controls["editSubName"].setValue(
          this.viewData.name
        );
        if (res.data.image == "") {
          this.text = "Choose File";
        }
        if (res.data.image != "") {
          this.text = "Image.jpg";
        }
      }
    });

    this.modalService.open(editSubModel, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    });
  }

  // Edit Sub Category on Submit
  editSubCategory() {
    this.submitted = true;
    if (this.editSubCategoryForm.valid) {
      let obj = {
        name: this.editSubCategoryForm.value.editSubName,
        image: this.imageFile,
      };
      if (!this.imageFile) {
        delete obj.image;
      }
      console.log(obj);
      // return;
      this.Srvc.putApi(this.localID, obj).subscribe((data: any) => {
        if (data.statusCode==200) {
          this.toastr.success("Sub Category Updated");
          this.editSubCategoryForm.reset();
          this.submitted=false;
          this.fileAttached = false;
          this.text = "Choose File";
          this.imageFile = null;
          this.modalService.dismissAll();
          this.getCategories();
          this.getSubCategory(this.parentID);
        } else {
          this.toastr.error(data.message, "Error", {
            timeOut: 2000,
          });
          this.getCategories();
          this.modalService.dismissAll();
          this.editSubCategoryForm.reset();
          this.fileAttached = false;
          this.submitted=false;
          this.imageFile = null;
          this.getSubCategory(this.parentID);
        }
      });
    }else {
      this.toastr.error("Please enter all the required fields", "Error", {
        timeOut: 2000,
      });
    }
  }
}
