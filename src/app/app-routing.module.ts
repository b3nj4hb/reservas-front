import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportesComponent } from './reportes/reportes.component';
import { ReservaComponent } from './reserva/reserva.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reportes', component: ReportesComponent },
  { path: 'reserva', component: ReservaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
