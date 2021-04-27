import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
export interface UserData {
  fullName: string,
  id:any,
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
  length: any;
  timer: number;
  search: string="";
  filter: any="";
  page: any;
  count: any;
  deleteid: any;
  file="Choose file";
  userid: any;
  constructor(private modalService: NgbModal,private apiservice: ApiService,private toaster:ToastrService,private fb:FormBuilder) {
    this.UpdateUser=this.fb.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
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
    //console.log(body);
    this.apiservice.httpupdateuser(body,id).subscribe((res:any)=>{
     // console.log(res);
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
