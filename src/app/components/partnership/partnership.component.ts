import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { SideNavigationService } from 'src/app/services/side-navigation.service';

@Component({
  selector: 'app-partnership',
  templateUrl: './partnership.component.html',
  styleUrls: ['./partnership.component.scss']
})
export class PartnershipComponent implements OnInit {

  linkList: MenuItem[] = [];

  constructor(
    public sideNavigationService: SideNavigationService
  ) { }

  ngOnInit() {
    this.sideNavigationService.linkList = this.linkList;
  }

}
