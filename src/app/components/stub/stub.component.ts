import { Component, OnInit } from '@angular/core';

import { faLink } from '@fortawesome/free-solid-svg-icons'; 

@Component({
  selector: 'app-stub',
  templateUrl: './stub.component.html',
  styleUrls: ['./stub.component.scss']
})
export class StubComponent implements OnInit {

  faLink = faLink;

  constructor() { }

  ngOnInit() {
  }

}
