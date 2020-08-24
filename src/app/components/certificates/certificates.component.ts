import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';
import { SideNavigationService } from 'src/app/services/side-navigation.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  linkList: MenuItem[] = [];

  constructor(
    public sideNavigationService: SideNavigationService
  ) { }

  ngOnInit() {
    this.sideNavigationService.linkList = this.linkList;
  }

}
