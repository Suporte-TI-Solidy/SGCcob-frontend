import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from 'src/app/configs/api.config';
import { CredenciaisDTO } from 'src/app/class/CredenciaisDTO';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LocalUser } from 'src/app/class/local_user';
import { storageService } from './storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient,
              public storage:storageService
              ) { }
              
  public jwtHelper = new JwtHelperService();  
  public authorization(obj:CredenciaisDTO):Observable<any>{

    return this.http.post(
      `${API_CONFIG.apiUrl}/login` ,
       JSON.stringify(obj).toString(),
       {observe:"response",responseType:'text'})
  }
  public refreshToken():Observable<any>{
    return  this.http.post(
        `${API_CONFIG.apiUrl}/sgc/authResource/refresh_token` ,
         {},
         {observe:"response",responseType:'text'})
    }

    public getUserLogged(){
      console.log(`${API_CONFIG.apiUrl}/sgc/usr/usuario_logado` )
      return this.http.get(`${API_CONFIG.apiUrl}/sgc/usr/usuario_logado` ,)
    }
    successfulLogin(authorizarionValue:string){
      let tok = authorizarionValue.substring(7)
      
      let user :LocalUser = {
        token: tok,
        usuario:this.jwtHelper.decodeToken(tok).sub
      }
      this.storage.setLocalUser(user)
    }
  

    logout(){
      this.storage.setLocalUser(null)
    }

}
