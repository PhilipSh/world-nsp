import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu-item';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavigationService {

  private _linkList$: BehaviorSubject<MenuItem[]> = new BehaviorSubject([]);
  public get linkList$(): Observable<MenuItem[]>{
    return this._linkList$.asObservable()
  }
  public set linkList(value: MenuItem[]){
    this._linkList$.next(value);
  }

  constructor() { }
}
