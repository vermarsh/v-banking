import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() {
    if(localStorage.getItem("token")) {
      history.back();
    }
  }

  ngOnInit(): void {
  }

}
