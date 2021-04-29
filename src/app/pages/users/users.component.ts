import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface UserData {
  firstName: string,
  lastName:string,
  _id:any,
  phoneNo:any,
  email:string;
  isApproved:boolean, 
  action:string,
  address:string
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  closeResult: string;
  table = [];
  UpdateUser:FormGroup;
  displayedColumns: string[] = [ 'name' ,'id','email','contact','address','status','action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  timer: number;
  filter:boolean;
  pageEvent: PageEvent;
  search="";
  page=1;
  pageIndex:number;
   pageSize:number;
   totalsize:number;
  count=5;
  deleteid: any;
  file="Choose file";
  userid: any;
  constructor(private modalService: NgbModal,private apiservice: ApiService,private toaster:ToastrService,private fb:FormBuilder) {
    this.UpdateUser=this.fb.group({
      firstName:["",[Validators.required,Validators.maxLength(15),Validators.minLength(2)]],
      lastName:["",[Validators.required,Validators.maxLength(15),Validators.minLength(2)]],
      phoneNo:["",Validators.required],
      email:["",[Validators.required,Validators.email]],
      address:["",Validators.required]
    });
  }
  ngOnInit(): void {
   this.DataList();
  }
  DataList()
  {

    let body=
    {
     search:this.search,
     count:this.count,
     isApproved:this.filter,
     page:this.page
    }
    this.apiservice.httpgetuser(body).subscribe((res:any)=>{
      console.log(res);
      this.table=res.data;
      this.dataSource = new MatTableDataSource(this.table);
      this.dataSource.sort = this.sort;
      this.totalsize=res.total;
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
      this.DataList();
    },500);
  }
  filterSelected(body:any){
    const filterValue = body;''
    console.log(filterValue);
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.filter=filterValue;
      this.ngOnInit();
    },500);
  }
  alphabate(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      return true;
    }
    return false;
  }
  productListAfterPageSizeChanged(event?:PageEvent): any {
    if (event.pageIndex == 0) {
      this.page = 1;
    } else {
      if (event.previousPageIndex < event.pageIndex) {
        this.page = event.pageIndex + 1;
      } else {
        this.page = event.pageIndex;
      }
    }
    this.count=event.pageSize;
    this.DataList();
  }
  GetOneUser(id:any)
  {
    console.log(id);
    this.userid=id;
    this.apiservice.HttpGetOneUser(id).subscribe((res:any)=>{
      console.log(res.User);
      this.UpdateUser.get('firstName').setValue(res.User.firstName);
      this.UpdateUser.get('lastName').setValue(res.User.lastName);
      this.UpdateUser.get('phoneNo').setValue(res.User.phoneNo);
      this.UpdateUser.get('email').setValue(res.User.email);
      this.UpdateUser.get('address').setValue(res.User.address);

    })
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
  UpdateUserData()
  {
    let id=this.userid;
    let body=this.UpdateUser.value;
    this.apiservice.httpupdateuser(body,id).subscribe((res:any)=>{
      this.DataList();
    });
  }
  onChangeBlockStatus(status,id,phoneNo)
  {
    let body={
      isApproved:!status,
      phoneNo:phoneNo
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
