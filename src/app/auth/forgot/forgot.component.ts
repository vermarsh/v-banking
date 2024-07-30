import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['../auth.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor() {
    if(localStorage.getItem("token")) {
      history.back();
    }
  }

  ngOnInit(): void {
  }

}
