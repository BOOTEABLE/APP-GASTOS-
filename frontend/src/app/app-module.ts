import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Informacion } from './components/informacion/informacion';
import { Menu } from './components/menu/menu';
import { Galeria } from './components/galeria/galeria';
import { Formulario } from './components/formulario/formulario';
import { Reporte } from './components/reporte/reporte';
import { ContactoDev } from './components/contacto-dev/contacto-dev';
import { Usuarios } from './components/usuarios/usuarios';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    App,
    Informacion,
    Menu,
    Galeria,
    // ❌ Impuesto,  QUITAR
    // ❌ Formulario, QUITAR si es standalone
    Reporte,
    ContactoDev,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Formulario, // ✅ si Formulario es standalone
       // ✅ si Impuesto es standalone
        Usuarios,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
