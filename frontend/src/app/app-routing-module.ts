import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Informacion } from './components/informacion/informacion';
import { Galeria } from './components/galeria/galeria';
import { Formulario } from './components/formulario/formulario';
import { Reporte } from './components/reporte/reporte';
import { ContactoDev } from './components/contacto-dev/contacto-dev';
import { Impuesto } from './components/impuesto/impuesto';
import { Usuarios } from './components/usuarios/usuarios';




const routes: Routes = [
  { path: '', redirectTo: 'informacion', pathMatch: 'full' },
  { path: 'informacion', component: Informacion },
  { path: 'galeria', component: Galeria },
  { path: 'registro', component: Formulario },
  { path: 'impuesto', component: Impuesto }, // ✅ NUEVO
  { path: 'reporte', component: Reporte },
  { path: 'contacto', component: ContactoDev },
  { path: 'users', component: Usuarios },
  { path: '**', redirectTo: 'informacion' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
