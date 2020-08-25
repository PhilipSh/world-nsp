import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SideNavigationService } from 'src/app/services/side-navigation.service';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.scss']
})
export class BuyProductsComponent implements OnInit, AfterViewInit {

  linkList: MenuItem[] = [
    {title: 'Беларусь', value: 'belarus'},
    {title: 'Росиия', value: 'russia'},
    {title: 'Украина', value: 'ukraine'}
  ];

  constructor(
    public sideNavigationService: SideNavigationService
  ) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.sideNavigationService.linkList = this.linkList;
  }

}
