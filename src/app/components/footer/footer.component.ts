import { Component, OnInit } from '@angular/core';

import { faFacebookSquare, faVk, faOdnoklassnikiSquare, faViber } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFacebookSquare = faFacebookSquare;
  faVk = faVk;
  faOdnoklassnikiSquare = faOdnoklassnikiSquare;
  faViber = faViber;

  constructor() { }

  ngOnInit() {
  }

}
