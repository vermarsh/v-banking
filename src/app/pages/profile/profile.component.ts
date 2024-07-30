import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profileTab: boolean = true;
  changeTab:boolean = false;
  active:number = 0;

  constructor(private router: Router) {
    if(location.href.includes("details")) {
      this.profile();
      this.active = 0;
    }
    if(location.href.includes("change-password")) {
      this.change();
      this.active = 1;
    }
  }

  ngOnInit(): void {
  }

  profile() {
    this.profileTab = true;
    this.changeTab = false;
  }
  change() {
    this.profileTab = false;
    this.changeTab = true;
  }

  logout() {
    localStorage.clear();
    localStorage.setItem("refresh","true");
    this.router.navigateByUrl("/login");
  }
}
