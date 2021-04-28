import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
  constructor(private apiservice:ApiService) {}
  ngOnInit(): void {
   
  }
  DataList(){}
}
