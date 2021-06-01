import { AfterViewInit, Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';


export interface UserData {
  hotelName: string,
  productname:string,
  // id: string,
  Duration: string,
  // orderdate:string,
  deliverydate:string,
  delivery_man:string,
  price:string,
  status:string,
}
@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements AfterViewInit    {

  closeResult: string;
  //table: any
  displayedColumns: string[] = [ 'hotelName' ,'productname', 'orderdate','deliverydate','delivery_man','price','status'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private modalService: NgbModal,public apiservice:ApiService,private route:ActivatedRoute,private toaster:ToastrService) {
    this.route.queryParams.subscribe((params:any)=>{
      this.id = params.id;
      console.log('id',params.id);
      
    })
    this.dataSource = new MatTableDataSource(this.table);
  }

  ngAfterViewInit() {
    this.GetUser()
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }


  discountModal(discount) {
    this.modalService.open(discount, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  table = [
    {
      hotelName: 'Services',
      productname:"This is description of the service added by the service provider",
      id: "#454545",
      Duration:"2hr 15min",
      deliverydate:"12-05-2021/13:00",
      delivery_man:"John",
      price:"50",
      status:"Completed",
    },
    {
      hotelName: 'Services',
      productname:"This is description of the service added by the service provider",
      id: "#454545",
      Duration:"2hr 15min",
      deliverydate:"12-05-2021/14:00",
      delivery_man:"John",
      price:"50",
      status:"Cancelled",
    },
    {
      hotelName: 'Services',
      productname:"This is description of the service added by the service provider",
      id: "#454545",
      Duration:"2hr 15min",
      deliverydate:"12-05-2021/14:00",
      delivery_man:"John",
      price:"50",
      status:"Pending",
    }
  ]
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  id: any;
  userData: any;
  
  ngOnInit(): void {
  
  }
  GetUser(){
    let url = `/api/v1/admin/viewUser/${this.id}`
    this.apiservice.getApi(url).subscribe((res:any)=>{
      console.log("User data",res);
      if(res.statusCode==200){
        this.userData = res.data
        console.log('Data detais',res);
      }
    })
  } 
}



