import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

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
