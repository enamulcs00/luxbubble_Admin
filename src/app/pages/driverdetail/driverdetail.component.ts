import { Component, OnInit,ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource, } from '@angular/material/table';
export interface UserData {
  hotelName: string,    
  productname:string,
  id: string,    
  orderdate:string,
  deliverydate:string,
  delivery_man:string,
  price:string,    
  status:string,
}
@Component({
  selector: 'app-driverdetail',
  templateUrl: './driverdetail.component.html',
  styleUrls: ['./driverdetail.component.css']
})
export class DriverdetailComponent implements OnInit {
  time: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  time1: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  time2: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  time3: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  time4: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  time5: NgbTimeStruct = {hour: 13, minute: 30, second: 30};
  time6: NgbTimeStruct = {hour: 13, minute: 30, second: 30};

    meridian = false;
    seconds = true;

  toggleMeridian() {
      this.meridian = !this.meridian;
  }
  //table: any
  displayedColumns: string[] = [ 'hotelName' ,'productname','id', 'orderdate','deliverydate','delivery_man','price','status'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private modalService: NgbModal) {
    // const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.table);
  }


  ngOnInit(): void {
  }
  closeResult: string;
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  
  discountModal(discount) {
    this.modalService.open(discount, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  table = [
    {    
      hotelName: 'Leuven',    
      productname:"Soya Chap",
      id: "#454545",    
      orderdate:"12-05-2021/12:00",
      deliverydate:"12-05-2021/13:00",
      delivery_man:"John",
      price:"50",    
      status:"Completed",      
    },
    {    
      hotelName: 'Mcdonalds',    
      productname:"Burger",
      id: "#454545",    
      orderdate:"12-05-2021/11:00",
      deliverydate:"12-05-2021/14:00",
      delivery_man:"John",
      price:"50",    
      status:"Cancelled",      
    },
    {    
      hotelName: 'Mcdonalds',    
      productname:"Burger",
      id: "#454545",    
      orderdate:"12-05-2021/11:00",
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
}
