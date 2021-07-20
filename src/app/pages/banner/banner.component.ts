import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { tr } from 'date-fns/locale';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  AddBannerForm:FormGroup
  fileName:any = 'Choose file'
  imageFile: any;
  submitted:boolean = false
  BannerItem: any;
  constructor(private modalService: NgbModal,private fb:FormBuilder,public service:ApiService,private toast:ToastrService) {}

  ngOnInit(): void {
    this.GetBanner()
    this.AddBannerForm= this.fb.group({
      name:['',[Validators.required,Validators.maxLength(30)]],
      startDate:['',Validators.required],
      endDate:['',Validators.required],
      startTime:['',Validators.required],
      endTime:['',Validators.required],
    })
  }
  userDeleteModal(userDelete) {
    this.modalService.open(userDelete, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  reviewModal(review) {
    this.modalService.open(review, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  orderConfirmModal(orderConfirm) {
    this.modalService.open(orderConfirm, {backdropClass: 'light-blue-backdrop',centered: true,size: 'sm'});
  }
  addBannerModal(banner) {
    this.modalService.open(banner, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  imagesBoxModal(imagesBox) {
    this.modalService.open(imagesBox, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg'});
  }
  sendFile(fileData) {
    let url = `/api/v1/admin/uploadFile`
   let formdata = new FormData()
    formdata.append('file', fileData);
    this.service.postApi(url,formdata).subscribe((res: any) => {
      console.log(res.data)
      if (res.statusCode==200) {
        this.imageFile =  res.data.filePath
     this.toast.success('File updated successfully')
        console.log("upload data res=>>", res.data)
      } else {
        this.toast.error(res.message)
      }
    });
  }
  uploadFile(event) {
  console.log("Evnt",event);
    var type = event.target.files[0].type;
    if(event.target.files && event.target.files[0] && type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
        this.fileName = event.target.files[0].name
      if (type === 'image/png' || type === 'image/jpg' || type === 'image/jpeg') {
        let fileData = event.target.files[0];
        this.sendFile(fileData)
         var reader = new FileReader()
      }
    }else{
      this.toast.error('File must be Jpg, Jpeg, Png','Error')
    }
  }
  AddBanner(){
    this.submitted = true
let url = `/api/v1/Admin/addBanner`
let obj = {
  // "category" : "60c0660ad386d432e7a4632c",
  // "subCategory" : "60c069f4d386d432e7a46330",
  "name" : this.AddBannerForm.value.name,
  "image" : this.imageFile,
  "bannerType" : "OFFER",
  "productLimit" : "5",
  "minOrderAmt" : "50",
  "discountType" : "PERCENTAGE",
  "discount" : "21"
}
if(this.AddBannerForm.valid){
  this.service.postApi(url,obj).subscribe((res:any)=>{
    if(res.statusCode==200){
      this.toast.success('Success','Banner added successfully')
      this.modalService.dismissAll()
      this.submitted = false
    }else{
     // this.toast.error('Error',res.message)
    }
  })
}
  }
  GetBanner(){
    let url = `/api/v1/Admin/getBanners`
    this.service.getApi(url).subscribe((res:any)=>{
      console.log('Get Banner called',res);
      if(res.statusCode==200){
        this.BannerItem = res.data.doc
      }
    })
  }
}
