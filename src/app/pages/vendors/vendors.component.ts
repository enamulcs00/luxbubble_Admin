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
  length:number;
  data:any;
  timer: number;
  search="";
  page=1;
  count=5;
  csvUrl: any;
  constructor(private modalService: NgbModal,private apiservice:ApiService) {}

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
