import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {
  closeResult: string;
  length:any;
  constructor(private modalService: NgbModal,private apiservice:ApiService) {}

  ngOnInit(): void {
  this.apiservice.httpgetsevice(this.search,this.page,this.count).subscribe((res:any)=>{
    console.log(res);
  });
  }
  count(search: (search: any, page: any, count: any) => void, page: (search: (search: any, page: any, count: any) => void, page: any, count: any) => void, count: any) {
    throw new Error('Method not implemented.');
  }
  page(search: (search: any, page: any, count: any) => void, page: any, count: any) {
    throw new Error('Method not implemented.');
  }
  search(search: any, page: any, count: any) {
    throw new Error('Method not implemented.');
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
