import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from '@angular/common/http';
import { MostrarUsuarioComponent } from './mostrar-usuario/mostrar-usuario.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    MostrarUsuarioComponent,
    UsuarioFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
