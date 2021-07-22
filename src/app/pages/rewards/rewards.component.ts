import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { tr } from 'date-fns/locale';
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
  constructor(private modalService: NgbModal,private fb:FormBuilder,public service:ApiService,private toast:ToastrService) {}

  ngOnInit(): void {
    this.addPromocode = this.fb.group({
      code:['',[Validators.required,Validators.maxLength(10)]],
      maxDiscount:['',Validators.required],
      endTime:['',Validators.required],
      startTime:['',Validators.required],
      endDate:['',Validators.required],
      startDate:['',Validators.required],
      discountType:['',Validators.required]
    })
  }

  public minValue() {
    return this.addPromocode.value.startDate

  }
  public maxValue() {
    return this.addPromocode.value.endDate
  }
ngAfterViewInit(){
  this.addPromocode.controls['discountType'].setValue('Percentage')
}
  promocodeModal(promocode) {
    this.modalService.open(promocode, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  couponModal(coupon) {
    this.modalService.open(coupon, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  SaveCoupon(){
    this.submitted = true
    this.toast.clear()
    if(this.addPromocode.value.startTime==this.addPromocode.value.endTime){
      this.addPromocode.controls['startTime'].reset()
      this.addPromocode.controls['endTime'].reset()
      this.IsEqual = true
      this.toast.error('Start time cannot equal to end time')
    }
    
    let url = '/api/v1/Admin/coupons'
if(this.addPromocode.valid){
  this.service.postApi(url,this.addPromocode.value).subscribe((res:any)=>{
    console.log('Cupon add',res);
    if(res.statusCode==200){
    console.log("Sucess",res);
    this.modalService.dismissAll()
  }
  })
}else {
 // this.toast.error('Form is invalid')
 setTimeout(() => {
   this.IsEqual = false
   
 }, 2000);
}

  }
}
