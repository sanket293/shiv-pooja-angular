import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  year: number =2020;
  constructor() { }

  ngOnInit() {
    const date = new Date();
    this.year = date.getFullYear();
  }

}
