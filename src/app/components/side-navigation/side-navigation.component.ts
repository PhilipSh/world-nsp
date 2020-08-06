import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from '../../models/menu-item';
import { SideNavigationService } from 'src/app/services/side-navigation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  linkList$: Observable<MenuItem[]>;

  constructor(
    public sideNavigationService: SideNavigationService
  ) { }

  ngOnInit() {
    this.linkList$ = this.sideNavigationService.linkList$;
  }

}
