import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }
  name = ""
  phone = ""
  gender = ""
  email = ""
  address = ""
  pincode = ""
  bloodgroup = ""
  dob = ""
  age = ""
  parent = ""
  username = ""
  pass = ""
  cpass = "" 
  
  readvalues = () => {
    let data = {
      name: this.name,
      phone: this.phone,
      gender: this.gender,
      email: this.email,
      address: this.address,
      pincode: this.pincode,
      bloodgroup: this.bloodgroup,
      dob: this.dob,
      age: this.age,
      parent: this.parent,
      username: this.username,
      pass: this.pass,
      cpass: this.cpass
    }
    console.log(data)
    alert("Registration Successful")
    this.name = ""
    this.phone = ""
    this.gender = ""
    this.email = ""
    this.address = ""
    this.pincode = ""
    this.bloodgroup = ""
    this.dob = ""
    this.age = ""
    this.parent = ""
    this.username = ""
    this.pass = ""
    this.cpass = ""
    
  }

     

  ngOnInit(): void {
  }

}
