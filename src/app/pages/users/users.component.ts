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
  isActive:boolean, 
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
submitted:boolean = false
  csvUrl: any;
  constructor(private modalService: NgbModal,private apiservice: ApiService,private toaster:ToastrService,private fb:FormBuilder) {
  //  var regx = /^[\w',\-\.]+( [\w',\-\.]+)*$/u
    this.UpdateUser=this.fb.group({
      firstName:["",[Validators.required,Validators.maxLength(15),Validators.pattern("^(?=.{1,50}$)[a-zA-Z]+(?:['_.\s][a-zA-Z]+)*$")]],
      lastName:["",[Validators.required,Validators.maxLength(15),Validators.pattern("^(?=.{1,50}$)[a-zA-Z]+(?:['_.\s][a-zA-Z]+)*$")]],
      phoneNo:[""],
      email:[""],
      address:["",[Validators.required,Validators.pattern(apiservice.regx)]]
    });
  }
  ngOnInit(): void {
   this.DataList();
  }
  DataList()
  {
let url = `/api/v1/admin/getUsers`
    let body=
    {
     search:this.search,
     count:this.count,
     isActive:this.filter,
     page:this.page
    }
    this.apiservice.postApi(url,body).subscribe((res:any)=>{
    
    if(res.statusCode==200){
      this.dataSource = new MatTableDataSource(res.data.doc);
      this.dataSource.sort = this.sort;
      this.totalsize=res.data.total;
      this.csvUrl = res.data.exportToCsv
    }else{
      this.totalsize = 0
    }
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
    
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.filter=body
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
  deleteUser()
  {
    let url = `/api/v1/admin/deleteUser/${this.deleteid}`
    this.apiservice.deleteApi(url).subscribe((res:any)=>{
      if(res.statusCode==200)
      {
       this.toaster.success(res.message);
       this.DataList()
       console.log("Deleted",res);
       this.modalService.dismissAll()
       
      }
      
     });
  }
  UpdateUserData()
  {
    this.submitted = true
    let url = `/api/v1/admin/updateUser/${this.userid}`
  
    let body=this.UpdateUser.value;
    if(this.UpdateUser.valid){
      this.apiservice.putApi(url,body).subscribe((res:any)=>{
        if(res.statusCode==200){
          this.toaster.success(res.message)
          console.log('Idd',this.userid);
          
          this.DataList();
          this.modalService.dismissAll()
          this.submitted = false
        }
        });
    }
  
  }
  exportToCsv(){
    window.open(this.csvUrl,'user details')
  }
  onChangeBlockStatus(status,id)
  {
    let body={
      isActive:!status,
      
    }
    let url = `/api/v1/admin/updateUser/${id}}`
  this.apiservice.putApi(url,body).subscribe((res:any)=>{
        if(res.statusCode==200){
          this.toaster.success(res.message)
          this.DataList();
        }
        }); }
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
userDetailModal(userDetail,obj) {
  this.userid = obj._id
  this.UpdateUser.get('firstName').setValue(obj.firstName);
      this.UpdateUser.get('lastName').setValue(obj.lastName);
      this.UpdateUser.get('phoneNo').setValue(obj.phoneNo);
      this.UpdateUser.get('email').setValue(obj.email);
      this.UpdateUser.get('address').setValue(obj.address);
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
