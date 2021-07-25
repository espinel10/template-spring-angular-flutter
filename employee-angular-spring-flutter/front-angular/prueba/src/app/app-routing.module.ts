import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaComponent } from './consulta/consulta.component';
import { RegistroComponent } from './registro/registro.component';
import { EdicionComponent } from './edicion/edicion.component';

const routes: Routes = [
{ path: '', redirectTo: 'consulta', pathMatch: 'full' },
{ path: 'consulta', component: ConsultaComponent },
{ path: 'edicion/:id', component: EdicionComponent },
{ path: 'registro', component: RegistroComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
