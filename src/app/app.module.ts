import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { EmpresasComponent } from './home/empresas/empresas.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { FinanceiroComponent } from './home/financeiro/financeiro.component';
import { AtendimentoComponent } from './home/atendimento/atendimento.component';
import { UsuarioComponent } from './home/usuario/usuario.component';
import { AuthComponent } from './auth/auth.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthService } from './services/services/auth.service';
import { ErrorInterceptorProvider } from './interceptors/error-interceptor';
import { AuthInterceptorProvider } from './interceptors/auth-interceptor';

export function tokenGetter() {
  return localStorage.getItem("localuser");
}

@NgModule({
  declarations: [    
    AppComponent,
    HomeComponent,
    SidenavComponent,
    AuthComponent,
    BodyComponent,    
    EmpresasComponent,
    DashboardComponent,
    FinanceiroComponent,
    AtendimentoComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:()=>{return tokenGetter()}  ,
        allowedDomains: ["http://localhost:8080"],
       // disallowedRoutes: ["http://example.com/examplebadroute/"],
      },})
  ],
  providers: [AuthService,AuthInterceptorProvider,ErrorInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
