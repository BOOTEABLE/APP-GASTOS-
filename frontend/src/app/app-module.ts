import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

// Componentes NO Standalone (Clásicos)
import { Informacion } from './components/informacion/informacion';
import { Menu } from './components/menu/menu';
import { Galeria } from './components/galeria/galeria';
import { ContactoDev } from './components/contacto-dev/contacto-dev';

// Componentes Standalone
import { Formulario } from './components/formulario/formulario';
import { Reporte } from './components/reporte/reporte'; // <--- Este es el problemático
import { Usuarios } from './components/usuarios/usuarios';


@NgModule({
  declarations: [
    App,
    Informacion,
    Menu,
    Galeria,
    ContactoDev,
    // ❌ BORRA "Reporte" DE AQUÍ.
    // Los componentes standalone NO van en declarations.
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
    // ✅ AQUÍ SÍ van los standalone:
    Formulario,
    Usuarios,
    Reporte  // <--- AGREGALO AQUÍ (junto a Formulario y Usuarios)
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }