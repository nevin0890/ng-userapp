import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private myrouter:Router) { }

  Username = ''
  Password = ''

  readvalues = () => {
    let data = {
      Username: this.Username,
      Password: this.Password
    }

    if (this.Username == "admin" && this.Password == "12345") {
      this.myrouter.navigate(["/dashboard"])
      
     
    }
    else {
      alert("invalid credentials!!!")
    }

      console.log(data)
  }

  ngOnInit(): void {
  }

}
