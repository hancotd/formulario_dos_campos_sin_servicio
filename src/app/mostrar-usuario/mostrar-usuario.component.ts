import { Component, OnInit } from '@angular/core';
import {UsuarioService } from 'src/app/servicios/'

@Component({
  selector: 'app-mostrar-usuario',
  templateUrl: './mostrar-usuario.component.html',
  styleUrls: ['./mostrar-usuario.component.css']
})
export class MostrarUsuarioComponent implements OnInit {
 usuario:any
  constructor(
    private usuarioSrv: UsuarioService
  ) { }
 this.obtener_usuario()
  ngOnInit(): void {
  }
obtener_usuarios(){
  this.usuarioSrv
}
}
