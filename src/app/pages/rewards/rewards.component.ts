import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit ,AfterViewInit{
  addPromocode:FormGroup
  submitted:boolean = false
  toppings = new FormControl();
  kitchenList: string[] = ['KFC', 'Mcdonalds', 'Leuven', 'Pizza Hut', 'Dominos'];
  categoryList: string[] = ['#154544', '#854544', '#654544', '#454544', '#254544'];
  dishList: string[] = ['Veg', 'Non-veg', 'Vegon', 'Gluten Free'];
  IsEqual: boolean = false;
  search: any='';
  count: any;
  filter: any;
  pageEvent: PageEvent;
  page: any=1;
  dataSource: any;
  totalsize: any;
  csvUrl: any;
  delId: any;
  timer: number;
  editId: any;
  pageSize: any=10;
  IsFilter: any;
  constructor(private modalService: NgbModal,private fb:FormBuilder,public service:ApiService,private toast:ToastrService) {}

  ngOnInit(): void {
    this.DataList()
    this.addPromocode = this.fb.group({
      code:['',[Validators.required,Validators.maxLength(10)]],
      maxDiscount:['',Validators.required],
      endTime:['',Validators.required],
      startTime:['',Validators.required],
      endDate:['',Validators.required],
      startDate:['',Validators.required],
      discountType:['',Validators.required],
      discount:['',Validators.required]
    })
  }

  public minValue() {
    return this.addPromocode.value.startDate

  }
  public maxValue() {
    return this.addPromocode.value.endDate
  }
ngAfterViewInit(){
  this.addPromocode.controls['discountType'].setValue('PERCENTAGE')
  this.addPromocode.controls['maxDiscount'].disable()
  this.addPromocode.controls['discount'].enable()
}
  promocodeModal(promocode,obj) {
    this.editId = undefined
    obj=='add'?(this.editId=undefined,this.ngAfterViewInit()):this.editId=obj._id
    this.submitted = false
    obj=='add'?(this.addPromocode.reset(),this.addPromocode.controls['discountType'].setValue('PERCENTAGE')):(this.addPromocode.patchValue(obj),obj.discount && obj.maxDiscount?(this.addPromocode.controls['discount'].enable(),this.addPromocode.controls['maxDiscount'].enable()):(obj.maxDiscount?(this.addPromocode.controls['maxDiscount'].enable(),this.addPromocode.controls['discount'].disable()):(this.addPromocode.controls['maxDiscount'].disable(),this.addPromocode.controls['discount'].enable())))
    this.modalService.open(promocode, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  couponModal(coupon,id) {
    this.delId = id
    this.modalService.open(coupon, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  SaveCoupon(){
    this.submitted = true
    this.toast.clear()
    if(this.addPromocode.value.startTime==this.addPromocode.value.endTime && this.addPromocode.valid){
      this.addPromocode.controls['startTime'].reset()
      this.addPromocode.controls['endTime'].reset()
      this.IsEqual = true
      this.toast.error('Start time cannot be equal to end time',"Time error",{timeOut:2000})
    }
    let url = '/api/v1/Admin/coupons'
   if(this.addPromocode.valid){
  this.service.postApi(url,this.addPromocode.value).subscribe((res:any)=>{
    console.log('Cupon add',res);
    if(res.statusCode==200){
      this.toast.success('Coupon added successfully','Success')
    this.modalService.dismissAll()
    this.IsEqual = false
    this.DataList()
  }
  })
}else {
 setTimeout(() => {
   this.IsEqual = false
 }, 2000);
}
}
UpdateCoupon(){
  this.submitted = true
  this.toast.clear()
  if(this.addPromocode.value.startTime==this.addPromocode.value.endTime && this.addPromocode.valid){
    this.addPromocode.controls['startTime'].reset()
    this.addPromocode.controls['endTime'].reset()
    this.IsEqual = true
    this.toast.error('Start time cannot be equal to end time',"Time error",{timeOut:2000})
  }
  let url = `/api/v1/Admin/coupons/${this.editId}`
 if(this.addPromocode.valid){
this.service.putApi(url,this.addPromocode.value).subscribe((res:any)=>{
  console.log('Cupon add',res);
  if(res.statusCode==200){
    this.toast.success('Coupon updated successfully','Success')
  this.modalService.dismissAll()
  this.IsEqual = false
  this.DataList()
}
})
}else {
setTimeout(() => {
 this.IsEqual = false
}, 2000);
}
}
 applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  clearTimeout(this.timer);
  this.timer=setTimeout(()=>{
    this.search=filterValue;
    this.DataList();
  },1000);
}
 deleteUser()
  {
    let url = `/api/v1/admin/coupons/${this.delId}`
    this.service.deleteApi(url).subscribe((res:any)=>{
      if(res.statusCode==200)
      {
       this.toast.success(res.message);
       this.DataList()
       console.log("Deleted",res);
       this.modalService.dismissAll()
       
      }
      
     });
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
 DataList()
  {
    let body=
    {
     search:this.search,
     limit:this.pageSize,
     isActive:this.filter?.toString(),
     page:this.page
    }
let url = `/api/v1/Admin/getAllCoupons`
    this.service.postApi(url,body).subscribe((res:any)=>{
      console.log('Get cupon',res);
    if(res.statusCode==200){
      this.dataSource = res.data.doc
      this.totalsize=res.data.totalcount;
     this.csvUrl = res.data.exportLink
     
    }else{
      this.totalsize = 0
    }
     });
  }
  exportToCsv(){
    window.open(this.csvUrl,'Coupons details')
  }
  filterSelected(body:any,ref){
    this.IsFilter = ref
    clearTimeout(this.timer);
    this.timer=setTimeout(()=>{
      this.filter=body
      this.ngOnInit();
    },500);
  }
  onChangeBlockStatus(status,id)
  {
    this.toast.clear()
    let body={"isActive" : !status}
  let url = `/api/v1/Admin/coupons/${id}`
  this.service.putApi(url,body).subscribe((res:any)=>{
        if(res.statusCode==200){
          this.toast.success(res.message)
          this.DataList();
        }
        });}
Onchange(e){
if(e=='PERCENTAGE'){
this.addPromocode.controls['discount'].setValidators(Validators.required)
this.addPromocode.controls['discount'].updateValueAndValidity()
this.addPromocode.controls['discount'].enable()
this.addPromocode.controls['maxDiscount'].reset()
this.addPromocode.controls['maxDiscount'].disable()
this.addPromocode.controls['maxDiscount'].clearValidators()
this.addPromocode.controls['maxDiscount'].updateValueAndValidity()
}else if(e=='FLAT'){
this.addPromocode.controls['maxDiscount'].setValidators(Validators.required)
this.addPromocode.controls['maxDiscount'].updateValueAndValidity()
this.addPromocode.controls['discount'].disable()
this.addPromocode.controls['maxDiscount'].enable()
this.addPromocode.controls['discount'].reset()
this.addPromocode.controls['discount'].clearValidators()
this.addPromocode.controls['discount'].updateValueAndValidity()
}else if(e=='BOTH'){
  this.addPromocode.controls['maxDiscount'].setValidators(Validators.required)
  this.addPromocode.controls['maxDiscount'].updateValueAndValidity()
  this.addPromocode.controls['discount'].setValidators(Validators.required)
  this.addPromocode.controls['discount'].updateValueAndValidity()
  this.addPromocode.controls['maxDiscount'].enable()
this.addPromocode.controls['discount'].enable()
}
}       
}
