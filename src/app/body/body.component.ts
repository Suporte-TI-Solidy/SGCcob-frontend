import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public collapse:boolean = true
@Input()
set collapsed(data:any){
  this.collapse = data
  console.log("direto",this.collapse)
}
}
