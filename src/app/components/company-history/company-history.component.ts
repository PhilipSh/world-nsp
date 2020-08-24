import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { SideNavigationService } from 'src/app/services/side-navigation.service';

@Component({
  selector: 'app-company-history',
  templateUrl: './company-history.component.html',
  styleUrls: ['./company-history.component.scss']
})
export class CompanyHistoryComponent implements OnInit {

  linkList: MenuItem[] = [];

  constructor(
    public sideNavigationService: SideNavigationService
  ) { }

  ngOnInit() {
    this.sideNavigationService.linkList = this.linkList;
  }

}
