import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss']
})
export class LoginComponent implements OnInit {
  creds: any = {
    email: "banking@example.com",
    password: "dummy@123"
  }
  email!: string;
  password!: string;

  constructor(private router: Router) {
    if(localStorage.getItem("refresh")) {
      localStorage.removeItem("refresh");
      location.reload();
    }
    if(localStorage.getItem("token")) {
      history.back();
    }
  }

  ngOnInit(): void {
  }

  login() {
    if(this.email&&this.password) {
      if(this.email===this.creds.email&&this.password===this.creds.password) {
        localStorage.setItem("token","bce8uy2g6237edt765rw5qrse56rr267513rert162t78edt172");
        localStorage.setItem("refresh","true");
        this.router.navigateByUrl("/dashboard");
      }
    }
  }

}
