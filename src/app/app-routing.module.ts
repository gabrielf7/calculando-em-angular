import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DescontoComponent } from './desconto/desconto.component';
import { DiadasemanaComponent } from './diadasemana/diadasemana.component';
import { DolarComponent } from './dolar/dolar.component';
import { HomeComponent } from './home/home.component';
import { IdadeComponent } from './idade/idade.component';
import { ImcComponent } from './imc/imc.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'home', component: HomeComponent },
  { path: 'imc', component: ImcComponent },
  { path: 'idade', component: IdadeComponent },
  { path: 'diadasemana', component: DiadasemanaComponent },
  { path: 'dolar', component: DolarComponent },
  { path: 'desconto', component: DescontoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
