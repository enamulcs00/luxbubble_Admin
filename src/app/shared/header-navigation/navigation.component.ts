import { Component, AfterViewInit, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ApiService } from 'src/app/services/api.service';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements AfterViewInit, OnInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;
  public element1: any;
  firstname:any;
  fullName:any;
  lastname: any;
  email: any;
  image: any;

  constructor(private router:Router,private modalService: NgbModal,private apiservice:ApiService) {
  
this.getData()
  }


  getData(){
    this.apiservice.httpgetprofile().subscribe(res=>{
      this.firstname=res.data.firstName;
      this.lastname=res.data.lastName;
      this.fullName = res.data.fullName
      this.email=res.data.email;
      this.image="http://dev.webdevelopmentsolution.net:3008"+res.data.image;
    });
  }
 ngOnInit()
 {

  this.apiservice.search_value.subscribe(res=>{
    if(res==true){
      this.getData()
    }
  })
 }
  // This is for Notifications
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      btn: 'btn-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];
  addBikeModal(addBike) {
    this.modalService.open(addBike, {backdropClass: 'light-blue-backdrop',centered: true,size: 'lg',backdrop:"static"});
  }

  ngAfterViewInit() {}
   openBox() {
    let element = document.getElementById("notification");    
    element.classList.toggle("sidebar_slide");
    
  }
  closeBox(){
    let element1 = document.getElementById("arrow-close").parentElement;
    element1.classList.remove("sidebar_slide");
  }
  Logout()
  {
    sessionStorage.removeItem("accessToken");
    this.router.navigate(['/login'])
  }
}
