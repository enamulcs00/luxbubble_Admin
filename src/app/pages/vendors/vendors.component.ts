import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { saveAs } from "file-saver";
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  closeResult: string;
  length:number;
  data:any;
  timer: number;
  search="";
  page=1;
  submitted:boolean= false
  count=5;
  acceptform:FormGroup
  csvUrl: any;
  statusId: any;
  delId: any;
  rejectId: any;
  rejectForm: FormGroup;
  Issubmitted: boolean = false;
  constructor(private fb:FormBuilder,private modalService: NgbModal,private apiservice:ApiService,private toaster:ToastrService) {}

  ngOnInit(): void {
  this.ListData();
  }
  ListData()
  {
    let url = `/api/v1/admin/getServiceProvider`
    let body={
      "page":this.page,
      "count":this.count,
      "search":this.search
  }
    console.log(body);
    this.apiservice.postApi(url,body).subscribe((res:any)=>{
      console.log('Vendors',res);
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
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.search=filterValue;
      console.log(this.search)
      this.ListData();
    },500);
  }
  
  Accept(id)
  {
    let body={
      "status":"ACCEPTED",
    // "isApproved":true,
      // "commissionType": this.acceptform.controls['commissionType'].value,
      // "commission": this.acceptform.controls['commission'].value.toString(),
  }
    let url = `/api/v1/admin/updateServiceprovider/${id}`

      this.apiservice.putApi(url,body).subscribe((res:any)=>{
        if(res.statusCode==200){
          this.toaster.success(res.message)
          this.ListData();
          this.modalService.dismissAll()
        }
      });
    
   }
  onChangeBlockStatus(status,id)
  {
    let body={
      "isActive" : !status
  }
    let url = `/api/v1/admin/updateServiceprovider/${id}`
  this.apiservice.putApi(url,body).subscribe((res:any)=>{
        if(res.statusCode==200){
        //  this.toaster.success(res.message)
          this.ListData();
        }
        }); }
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
  exportToCsv(){
    window.open(this.csvUrl,'Vendors details')
  }
// This is for the first modal
open1(content1) {
  this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    this.closeResult = `Closed with: ${result}`;
  }, (reason) => {
    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  });
}
openWindowCustomClass(content3) {
  this.modalService.open(content3, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userprofileModal(userDelete) {
  
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
userDeleteModal(userDelete,id) {
  this.delId = id
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
userDetailModal(userDetail) {
  this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
addUserModal(addUser) {
  this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
// vendorConfirmModal(vendorConfirm,obj) {
//   this.statusId = obj._id
//   this.acceptform=this.fb.group({
//     commission:['',Validators.required],
//     commissionType:['',Validators.required],
//   });
//   this.modalService.open(vendorConfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
// this.acceptform.controls['commission'].setValue(obj.commission)
// this.acceptform.controls['commissionType'].setValue(obj.commissionType) 
// }
vendorUnconfirmModal(vendorUnconfirm,id) {
  this.rejectId = id
  this.rejectForm=this.fb.group({
    message:['',[Validators.required,Validators.pattern(this.apiservice.regx)]],
  });
  this.modalService.open(vendorUnconfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
vendorDocumentModal(vendorDocument) {
  this.modalService.open(vendorDocument, {backdropClass: 'light-blue-backdrop',centered: true,size: 'md'});
}
editdetailModal(editdetail) {
  this.modalService.open(editdetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'md'});
}
private getDismissReason(reason: any): string {
  if (reason === ModalDismissReasons.ESC) {
    return 'by pressing ESC';
  } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    return 'by clicking on a backdrop';
  } else {
    return  `with: ${reason}`;
  }
}
deleteVendor(){
let url = `/api/v1/admin/deleteServiceprovider/${this.delId}`
this.apiservice.deleteApi(url).subscribe((res:any)=>{
  if(res.statusCode==200){
    this.toaster.success(res.message)
    this.modalService.dismissAll()
    this.ListData()
  }
})
}
Reject(){
  this.Issubmitted = true
  let url = `/api/v1/admin/rejectServiceProvider/${this.rejectId}`
  if(this.rejectForm.valid){
    this.apiservice.postApi(url,this.rejectForm.value).subscribe((res:any)=>{
      if(res.statusCode==200){
        this.toaster.success(res.message)
        this.modalService.dismissAll()
        this.ListData()
      }
    })
  }}
}
