import { Component, OnInit } from '@angular/core';
import { SideNavigationService } from 'src/app/services/side-navigation.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor( 
    private sideNavigationService: SideNavigationService
    ) { }

  ngOnInit() {    
    this.sideNavigationService.linkList = [];
  }

}
