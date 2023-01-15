import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { storageService } from "../services/services/storage-service.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(public localStorage:storageService){}


    intercept(req:HttpRequest<any>, next :HttpHandler):Observable<HttpEvent<any>>{
            let LocalUser = this.localStorage.getLocaluser();
         
            
            if(LocalUser){ 
               const authReq= req.clone({headers:req.headers.set("Authorization","Bearer " + LocalUser.token )})               
               return next.handle(authReq)
            }else{
               return next.handle(req)
            }

    }
}

export const AuthInterceptorProvider ={
    provide: HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true

}