import { Component, Input, OnInit } from '@angular/core';
import { MENU_ITENS } from './nav-menu';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
public navData :any = MENU_ITENS;
  constructor() { }

  ngOnInit(): void {
    console.log(this.navData)
  }
  public colapse:boolean = true
  @Input()
  set collapsed(data:boolean){
      this.colapse = data;  
  }
  



}
