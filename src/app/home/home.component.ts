import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person1="../media/images/profile2.jpg";
  parseon2="/src/app/media/images/profile2.jpg";


  constructor() { }

  ngOnInit(): void {
  }
    url="./assets/profile.jpg";
}
