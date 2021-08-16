import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
  id: any;
  userData: any;
  constructor(private apiservice:ApiService,private route:ActivatedRoute,private toaster:ToastrService) {
    this.route.queryParams.subscribe((params)=>{
      this.id = params.id;
    })
  }
  ngOnInit(): void {
    this.GetUser()
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
