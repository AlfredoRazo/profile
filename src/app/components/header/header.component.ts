import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang = 'en';

  constructor() { }

  ngOnInit(): void {
  }
  toggleLang() {
    if (this.lang === 'en') {
      this.lang = 'es'
    } else {
      this.lang = 'en'
    }
  }

}
