import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SideNavigationService } from './services/side-navigation.service';
import { MenuItem } from './models/menu-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'nsp';

  linkList$: Observable<MenuItem[]>;

  constructor(
    public sideNavigationService: SideNavigationService
  ){}

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.linkList$ = this.sideNavigationService.linkList$;
  }

}
