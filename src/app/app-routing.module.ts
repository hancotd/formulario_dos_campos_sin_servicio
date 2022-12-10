import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { UsuarioFormularioComponent } from './usuario-formulario/usuario-formulario.component';

const routes: Routes = [
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'mostrar-usuario',
    component: UsuarioFormularioComponent
  },
  {
    path: 'egresos',
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
