import { Component, OnInit } from '@angular/core';

import { faFacebookSquare, faVk, faOdnoklassnikiSquare, faViber } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFacebookSquare = faFacebookSquare;
  faVk = faVk;
  faOdnoklassnikiSquare = faOdnoklassnikiSquare;
  faViber = faViber;

  menu: MenuItem[] = [
    {title: 'Главная', value: '/'},
    {title: 'Новости и акции', value: '/news'},
    {title: 'Как купить продукцию', value: '/buy'},
    {title: 'Партнерское соглашение', value: '/partnership'},
  ]

  constructor(
    private router : Router
  ) { }

  navigate(route: string){
    this.router.navigate([route])
  }

  ngOnInit() {
  }

}
