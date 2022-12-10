import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  url_backend = environment.url_backend+'/usuario';
  constructor(
    private http:HttpClient
  ) { }

  crear_registro(datos:any){
    return this.http.post(`${this.url_backend+'/crear-usuario'}`,datos)
  }

  obtener_regristro(){
    return this.http.get(`${this.url_backend+'/obtener-registros '}`,)
  }
}
