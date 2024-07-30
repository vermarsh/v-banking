import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() {
    if(localStorage.getItem("refresh")) {
      localStorage.removeItem("refresh");
      location.reload();
    };
  }

  ngOnInit(): void {
  }

}
