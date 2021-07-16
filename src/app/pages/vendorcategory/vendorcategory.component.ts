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
  text: string='Choose file';
  file: any;
  addCategoryFlag: boolean;
  imageSizeError: boolean;
  fileAttached: boolean;
  imageFile: any='';
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
    this.getCategories();
  }
// Get Vendors

  getCategories() {
   let url = `/api/v1/admin/getCategory`
   let obj ={"page" : 1,"count" : 100 }
    this.Srvc.postApi(url,obj).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.categories = res.data.doc
      }else{
    //    this.toastr.error('Error','Something went wrong',{timeOut:1000})
      }
    })
  }

  // Get SubCategory
  getSubCategory(id) {
    let url = `/api/v1/Admin/getSubCategory/${id}`
    this.Srvc.getApi(url).subscribe((res: any) => {
      console.log('Sub res',res);
      if (res.statusCode == 200) {
        this.subCategoryData = res.data;
      } else {
      //  this.toastr.error(res.message, "Error", {
       //   timeOut: 1000,
       // });
      }
    });
  }

  // Add Category Form
  addCategoryForm = this.formBuilder.group({
    name: [
      "",
      [Validators.required, Validators.maxLength(35)],
    ],
  
    image: [""],
  });


  // Add Category
  AddCategory() {
    let url = `/api/v1/admin/createCategory`
    this.submitted = true;
    if (this.addCategoryForm.valid) {
      if (this.imageFile.length) {
        let obj = {
          name: this.addCategoryForm.value.name,
          image: this.imageFile,
          // description:'Enam'
        };
        this.Srvc.postApi(url,obj).subscribe((data: any) => {
          if (data.statusCode == 200) {
            this.toastr.success('Success','Category added',{timeOut:1000})
            this.modalService.dismissAll();
            this.addCategoryForm.reset();
            this.text = "Choose File";
            this.getCategories();
            this.submitted = false;
          } else {
            this.addCategoryFlag = true;
        //    this.toastr.error('Error','Something went wrong',{timeOut:800})
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
  SubCategoryAddition() {
    this.submitted = true;
    let url = `/api/v1/admin/createCategory`
    this.submitted = true;
    if (this.addCategoryForm.valid) {
      if (this.imageFile.length) {
        let obj = {
          name: this.addCategoryForm.value.name,
          image: this.imageFile,
          parent:this.localID
        };
        this.Srvc.postApi(url,obj).subscribe((data: any) => {
          if (data.statusCode == 200) {
            this.toastr.success('Success','Sub category added',{timeOut:1000})
            this.modalService.dismissAll();
            this.addCategoryForm.reset();
            this.text = "Choose File";
            this.getCategories();
            this.submitted = false;
          } else {
            this.addCategoryFlag = true;
           // this.toastr.error('Error','Something went wrong',{timeOut:800})
          }
        });
      } else {
        // this.toastr.error("Please choose sub category image", "Error", {
        //   timeOut: 2000,
        // });
      }
    } else {
      this.toastr.error("Please enter all the required fields", "Error", {
        timeOut: 2000,
      });
    }
  }
  SubCategoryUpdate() {
    this.submitted = true;
    let url = `/api/v1/admin/updateCategory/${this.localID}`
    this.submitted = true;
    if (this.addCategoryForm.valid) {
      if (this.imageFile.length) {
        let obj = {
          name: this.addCategoryForm.value.name,
          image: this.imageFile,
          parent:this.parentID
        };
        this.Srvc.postApi(url,obj).subscribe((data: any) => {
          if (data.statusCode == 200) {
            this.toastr.success('Success','Sub category added',{timeOut:1000})
            this.modalService.dismissAll();
            this.addCategoryForm.reset();
            this.text = "Choose File";
            this.getCategories();
            this.submitted = false;
          } else {
            this.addCategoryFlag = true;
          //  this.toastr.error('Error','Something went wrong',{timeOut:800})
          }
        });
      } else {
        this.toastr.error("Please choose sub category image", "Error", {
          timeOut: 2000,
        });
      }
    } else {
      this.toastr.error("Please enter all the required fields", "Error", {
        timeOut: 2000,
      });
    }
  }
  sendFile(fileData) {
    let url = `/api/v1/admin/uploadFile`
   let formdata = new FormData()
    formdata.append('file', fileData);
    this.Srvc.postApi(url,formdata).subscribe((res: any) => {
      console.log(res.data)
      if (res.statusCode==200) {
        this.imageFile =  res.data.filePath
     this.toastr.success('File updated successfully')
        console.log("upload data res=>>", res.data)
      } else {
        this.toastr.error(res.message)
      }
    });
  }
  uploadFile(event) {
  console.log("Evnt",event);
    var type = event.target.files[0].type;
    if(event.target.files && event.target.files[0] && type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
        this.text = event.target.files[0].name
      if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
        let fileData = event.target.files[0];
        this.sendFile(fileData)
         var reader = new FileReader()
      }
    }else{
      this.toastr.error('File must be Jpg, Jpeg, Png','Error')
    }
  }
  // Delete Category
  deleteCategory() {
    let url = `/api/v1/admin/deleteCategory/${this.deleteId}`
    this.Srvc.deleteApi(url).subscribe((data: any) => {
      if (data.statusCode == 200) {
        this.getCategories();
        this.getSubCategory(this.localID);
        this.modalService.dismissAll();
        this.toastr.success('Deleted','Category deleted',{timeOut:800})
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

  deleteBoxModal(userDelete,id) {
this.deleteId = id
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


  editBoxModal(editModel, item) {
    this.localID = item._id;
        this.addCategoryForm.controls["name"].setValue(item.name);
        this.text = item.image.split('/').pop()
        this.imageFile = item.image
    this.modalService.open(editModel, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    })
  }

  // Edit Category
  editCategoryData() {
    let url = `/api/v1/admin/updateCategory/${this.localID}`
    this.submitted = true;
    this.submitted = true;
    if (this.addCategoryForm.valid) {
      if (this.imageFile.length) {
        let obj = {
          name: this.addCategoryForm.value.name,
          image: this.imageFile,
          // description:'Enam'
        };
        this.Srvc.putApi(url,obj).subscribe((data: any) => {
          if (data.statusCode == 200) {
            this.toastr.success('Success','Category updated',{timeOut:1000})
            this.modalService.dismissAll();
            this.addCategoryForm.reset();
            this.text = "Choose File";
            this.getCategories();
            this.submitted = false;
          } else {
            this.addCategoryFlag = true;
            this.toastr.error('Error','Something went wrong',{timeOut:800})
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
  addsubCategoryModel(addsubCategory, id) {
    this.localID = id;
    this.text = 'Choose file'
    this,this.imageFile = ''
    this.submitted = false
    this.addCategoryForm.reset()
    this.modalService.open(addsubCategory, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    });
  }
  addCategoryModel(addCategory) {
    this.imageFile = ''
    this.text = "Choose File";
    this.addCategoryForm.reset()
    this.submitted = false
    this.modalService.open(addCategory, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    });
  }

editBoxModal1(editSubModel,obj,id) {
  this.parentID = id
  this.localID = obj._id
  this.text = obj.image.split('/').pop()
  this.imageFile = obj.image
this.addCategoryForm.controls['name'].setValue(obj.name)
    this.modalService.open(editSubModel, {
      backdropClass: "light-blue-backdrop",
      centered: true,
      size: "lg",
    });
  }

}
