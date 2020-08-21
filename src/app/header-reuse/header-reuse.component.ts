import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-reuse',
  templateUrl: './header-reuse.component.html',
  styleUrls: ['./header-reuse.component.css']
})
export class HeaderReuseComponent implements OnInit {
  url="./assets/profile.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
