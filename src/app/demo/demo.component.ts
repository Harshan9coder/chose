import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  url="./assets/profile.jpg";
  constructor() { }

  ngOnInit(): void {
  }

  mainlogo="./assets/logo.png";

}



