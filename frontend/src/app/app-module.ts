import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// Componentes Clásicos
import { Informacion } from './components/informacion/informacion';
import { Menu } from './components/menu/menu';
import { Galeria } from './components/galeria/galeria';
import { Impuesto } from './components/impuesto/impuesto';
import { ContactoDev } from './components/contacto-dev/contacto-dev';
import { Formulario } from './components/formulario/formulario';
import { Reporte } from './components/reporte/reporte'; 
import { Usuarios } from './components/usuarios/usuarios';


@NgModule({
  declarations: [
    App,
    Informacion,
    Menu,
    Galeria,
    ContactoDev,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, // Necesario para el servicio de empleados
    
    // Standalone van aquí:
    Impuesto,
    Formulario,
    Usuarios,
    Reporte
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }