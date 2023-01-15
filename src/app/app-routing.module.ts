import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AtendimentoComponent } from './home/atendimento/atendimento.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { EmpresasComponent } from './home/empresas/empresas.component';
import { FinanceiroComponent } from './home/financeiro/financeiro.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './home/usuario/usuario.component';

const routes: Routes = [
  {path:'',redirectTo:"auth",pathMatch:'full'},
  {path:'auth',component:AuthComponent},
  {path:'home',component:HomeComponent,
  children:[
    {path:'dashboard',component:DashboardComponent},
    {path:'empresas',component:EmpresasComponent},
    {path:'financeiro',component:FinanceiroComponent},
    {path:'usuario',component:UsuarioComponent},
    {path:'atendimento',component:AtendimentoComponent },
    {path:'usuarios', component:UsuarioComponent}
  ]
  
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
