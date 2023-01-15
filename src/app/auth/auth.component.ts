import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/services/auth.service';
import { storageService } from '../services/services/storage-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  providers:[AuthService]
})
export class AuthComponent implements OnInit {

  public fControl:FormGroup;

  constructor(public rota:Router,
              private fBuilder:FormBuilder,
              public authorization:AuthService,
              public storage:storageService
              ) { 

    this.fControl = this.fBuilder.group({
      'usuario':[''],
      'senha':['']
    })
    
    
  }

  ngOnInit(): void {
    this.authorization.successfulLogin('');
  }

login(){  
  this.authorization.authorization(this.fControl.value).subscribe((data:any)=>{
    this.authorization.successfulLogin(data.headers.get('Authorization'));
    this.rota.navigate(['home'])

  },(error:any)=>{
    console.log(error)
  })
}

}
