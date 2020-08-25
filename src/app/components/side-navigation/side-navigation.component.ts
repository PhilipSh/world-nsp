import { Component, OnInit, Input } from '@angular/core';
import {MenuItem} from '../../models/menu-item';
import { SideNavigationService } from 'src/app/services/side-navigation.service';
import {tap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  linkList$: Observable<MenuItem[]>;
  route: string;

  navigate(fragment: string){
    this.router.navigate([], {fragment: fragment, skipLocationChange: true})
  }

  constructor(
    public sideNavigationService: SideNavigationService,
    public router: Router
  ) { 
      router.events.subscribe(ev => {
        this.route = router.url;
      })
    }

  ngOnInit() {
    this.linkList$ = this.sideNavigationService.linkList$;
  }

}
