import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { saveAs } from "file-saver";
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  closeResult: string;
  length:any;
  data:any;
  timer: number;
  search="";
  page=1;
  count=5;
  constructor(private modalService: NgbModal,private apiservice:ApiService) {}

  ngOnInit(): void {
  this.ListData();
  }
  ListData()
  {
    let body={
      "search":this.search
    }
    console.log(body);
    this.apiservice.httpgetsevice(body,this.page,this.count).subscribe((res:any)=>{
      console.log(res);
      this.data=res.user;
      this.length=res.TotalPages;
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
  onChangeBlockStatus(status,id,email)
  {
    let body={
      isActive:!status,
      email:email
    }
    console.log(body);
    this.apiservice.HttpUpdateServiceProvider(body,id).subscribe((res:any)=>{
      console.log(res);
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
  ExportCsv() {
    // saveAs(
    //   "http://15.207.74.128:9031/api/admin/exportToCsvSP/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQ5ZWQ1NzI5MWYwZjJmMzRlYWUxM2IiLCJpYXQiOjE2MTg2MzYyMzMsImV4cCI6MTYyMTIyODIzM30.pA8qEaOVljL7lrW2CL2h5aVgXYxxis6a39uqHyK0hA0/sp.csv",
    //   "users.csv"
    // );
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
userDeleteModal(userDelete) {
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
userDetailModal(userDetail) {
  this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
addUserModal(addUser) {
  this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
vendorConfirmModal(vendorConfirm) {
  this.modalService.open(vendorConfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
vendorUnconfirmModal(vendorUnconfirm) {
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
}
