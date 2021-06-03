import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-vendorcategory',
  templateUrl: './vendorcategory.component.html',
  styleUrls: ['./vendorcategory.component.css']
})
export class VendorcategoryComponent implements OnInit {
  length:number;
  data:any;
  timer: number;
  search="";
  page=1;
  submitted:boolean= false
  count=10;
  
  csvUrl: any;
  statusId: any;
  delId: any;
  rejectId: any;
  
  Issubmitted: boolean = false;
  panelOpenState = false;
  closeResult: string;

  toppings = new FormControl();
  toppingList: string[] = ['Main', 'Desserts', 'Side', 'Drink', 'Appetiser',];
  dishType: string[] = ['Veg', 'Non-Veg'];
  cusinine: string[] = ['Indian', 'Italian ', 'Chiness',];
  addcategory: FormGroup;
  profile: any;
  files: any;
  obj: any;
  id: any;
  constructor(private modalService: NgbModal,private fb:FormBuilder,public apiservice:ApiService,private toaster:ToastrService) {
    this.addcategory = this.fb.group({
      name:['',[Validators.required]],
      image:['']
    })
  }
  ngOnInit(): void {
    this.ListData()
  }
  deleteBoxModal(userDelete,id) {
    this.delId = id
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }

  addUserModal(addUser) {
    this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  editBoxModal(editModel,obj) {
    console.log('Edit Obj',obj);
    this.id = obj._id
    this.submitted = false
    this.addcategory.controls['name'].setValue(obj.name)
    this.profile = obj.image.split('/').pop()
    this.modalService.open(editModel, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addsubCategoryModel(addsubCategory) {
    this.modalService.open(addsubCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  addCategoryModel(addCategory) {
    this.addcategory.reset()
    this.profile =null
    this.modalService.open(addCategory, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  ListData()
  {
    let url = `/api/v1/admin/getCategory`
    let body={
      "page":this.page,
      "count":this.count,
      
  }
    console.log(body);
    this.apiservice.postApi(url,body).subscribe((res:any)=>{
      console.log('Category',res);
      if(res.statusCode==200){
        console.log(res);
        this.data=res.data.doc;
        this.length=res.data.total;
        console.log('Len',this.length);
        this.csvUrl = res.data.exportToCsv
      }else{
        this.length = 0
      }
    });
  }
  productListAfterPageSizeChanged(e): any {
    console.log(e);
    
    if (e.pageIndex == 0) {
      this.page = 1;
    } else {
      if (e.previousPageIndex < e.pageIndex) {
        this.page = e.pageIndex + 1;
      } else {
        this.page = e.pageIndex;
      }
    }
    this.count=e.pageSize;
    this.ListData();
  }
  deleteVendor(){
    let url = `/api/v1/admin/deleteCategory/${this.delId}`
    this.apiservice.deleteApi(url).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.toaster.success(res.message)
        this.modalService.dismissAll()
        this.ListData()
      }
    })
    }
    Add(){
      this.submitted = true
      let obj = {
       "name": this.addcategory.controls['name'].value,
      "image": this.files,
   }
     let url = `/api/v1/admin/createCategory`
     if(this.addcategory.valid && this.profile){
       this.apiservice.postApi(url,obj).subscribe((res:any)=>{
         if(res.statusCode==200){
           this.toaster.success(res.message)
          this.submitted = false
          this.ListData()
         this.modalService.dismissAll()
         this.addcategory.reset()
         }
         });
     }
}
update(){
  this.submitted = true
  let obj = {
   "name": this.addcategory.controls['name'].value,
  "image": this.files,
}
 let url = `/api/v1/admin/updateCategory/${this.id}`
 if(this.addcategory.valid && this.profile){
   this.apiservice.putApi(url,obj).subscribe((res:any)=>{
     if(res.statusCode==200){
       this.toaster.success(res.message)
      this.submitted = false
      this.ListData()
     this.modalService.dismissAll()
     this.addcategory.reset()
     }
     });
 }
}
sendFile(fileData) {
 let url = `/api/v1/admin/uploadFile`
let formdata = new FormData()
 formdata.append('file', fileData);
 this.apiservice.postApi(url,formdata).subscribe((res: any) => {
   console.log(res.data)
   if (res.statusCode==200) {
     
  this.toaster.success('File updated successfully')
     console.log("upload data res=>>", res.data)
     
       this.files = res.data.filePath
     
   } else {
     this.toaster.error(res.message)
   }
 });
}
uploadFile(event) {
 if(event.target.files && event.target.files[0]) {
   var type = event.target.files[0].type;
     this.profile = event.target.files[0].name
   if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
     let fileData = event.target.files[0];
     this.sendFile(fileData)
      var reader = new FileReader()
   }
 }
}
}
