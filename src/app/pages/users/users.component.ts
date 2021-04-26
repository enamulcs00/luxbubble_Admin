import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
export interface UserData {
  fullName: string,
  id: string,
  phoneNo:any,
  email:string;
  isApproved:boolean,
  action:string,
  address:string,
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  closeResult: string;
  table = [];
  displayedColumns: string[] = [ 'name' ,'id','email','contact','address','status','action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  length: any;
  timer: number;
  search: string="";
  filter: any="";
  page: any;
  count: any;
  deleteid: any;

  constructor(private modalService: NgbModal,private apiservice: ApiService,private toaster:ToastrService) {
    
  }
  ngOnInit(): void {
    this.apiservice.httpgetuser(this.search,this.filter,this.page,this.count).subscribe((res:any)=>{
      console.log(res);
      this.table=res.user;
      this.dataSource = new MatTableDataSource(this.table);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.length=res.totalPages;
      });
  }
  discountModal(discount) {
    this.modalService.open(discount, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.search=filterValue;
      this.ngOnInit();
    },500);
  }
  filterSelected(body:any){
    const filterValue = body;
    console.log(filterValue);
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.filter=filterValue;
      this.ngOnInit();
    },500);
  }
  productListAfterPageSizeChanged(e): any {
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
    this.ngOnInit();
  }
  deleteUser()
  {
    this.apiservice.HttpDeleteUser(this.deleteid).subscribe(res=>{
      if(res.success==true)
      {
       this.toaster.success("Done","Delete User");
       this.ngOnInit();
      }
      else
      {
       this.toaster.error(res.message,"Delete User");
      }
     });
  }
  onChangeBlockStatus(status, id)
  {
    let body={isApproved:!status
    }
    console.log(body);
    this.apiservice.httpupdateuser(body,id).subscribe((res:any)=>{
      console.log(res);
    });
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
   this.deleteid=id;
  this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
}
userDetailModal(userDetail) {
  this.modalService.open(userDetail, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
}
addUserModal(addUser) {
  this.modalService.open(addUser, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
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
