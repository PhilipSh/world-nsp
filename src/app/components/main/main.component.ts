import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { SideNavigationService } from 'src/app/services/side-navigation.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  linkList: MenuItem[] = [
    {title: 'История компании', value: 'company-history'},
    {title: 'Конроль качества', value: 'quality-control'},
    {title: 'Сертификаты', value: 'certificates'},
  ];
  
  constructor(
    private sideNavigationService: SideNavigationService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.linkList)
    this.sideNavigationService.linkList = this.linkList;
  }

}
