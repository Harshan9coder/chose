import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logimg="./assets/loginimg.png";
  logo="./assets/logo.png";
  constructor() { }

  ngOnInit(): void {
  }

}
