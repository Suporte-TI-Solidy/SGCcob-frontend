import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public auth:AuthService,public router:Router) { }
  public userLogged:any;
  public emps:any;
 

  ngOnInit(): void {
    this.auth.refreshToken().subscribe((data:any)=>{       
      this.auth.successfulLogin(data.headers.get('Authorization'));
      this.router.navigate(['/home']);      
    },(err)=>{
      console.log(err)      
      this.router.navigate(['/auth']);
    })
    this.auth.getUserLogged().subscribe((data:any)=>{
      this.userLogged = data
      console.log(this.userLogged )
    })
  }

  public collapsed:boolean = false;
  public collapsedMenu:boolean = false;
  
  menuCollapsed(){
    this.collapsed = !this.collapsed 
    console.log(this.collapsed)
  }

  menuUser(){
      this.collapsedMenu = !this.collapsedMenu
  }

  empSelected(dado:any){
    console.log('empresa',dado)
  }
}
