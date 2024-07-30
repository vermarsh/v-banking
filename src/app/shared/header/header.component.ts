import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn:boolean=false;
  showMore:boolean=false;

  constructor(private router: Router) {
    if(localStorage.getItem("token")) {
      console.log(event)
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    if(location.href.includes("dashboard")) {
      if(!localStorage.getItem("token")) {
        history.back();
      }
    }
  }

  ngOnInit(): void { }

  logout() {
    localStorage.clear();
    localStorage.setItem("refresh","true");
    this.router.navigateByUrl("/login");
  }

}
