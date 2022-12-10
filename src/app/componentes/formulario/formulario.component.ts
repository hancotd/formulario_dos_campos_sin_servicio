import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormularioService } from '../../servicios/formulario.service'
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  usuario:any
  formulario:any;
  datos_formulario ={
    nombre:null,
    apellido:null,
    rut:null,
    correo:null,
    password:null,
  }
  registro:any;
  registros:any;


  constructor(private fb:FormBuilder, 
    private formularioSrv: FormularioService
    ) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      rut:['',[Validators.required]],
      correo:['',[Validators.required]],
      password:['',[Validators.required]],
    });
  }

  //obtener los las validaciones
  get formularioReactivo(){
    return this.formulario.controls;
  }

  botonEnviar(){

    this.datos_formulario.nombre = this.formularioReactivo.nombre.value;
    this.datos_formulario.apellido = this.formularioReactivo.apellido.value;
    this.datos_formulario.rut = this.formularioReactivo.rut.value;
    this.datos_formulario.correo = this.formularioReactivo.correo.value;
    this.datos_formulario.password = this.formularioReactivo.password.value;
    console.log(this.datos_formulario)
    this.formularioSrv.crear_registro(this.datos_formulario).subscribe(
      (response:any) => {
      console.log(response);
      }, error => {
        console.log(error)
      }
      
    )
  }
  obtener_registros(){
    this.formularioSrv.obtener_regristro().subscribe(
      (response:any) => {
       this.registros = response.registros;
       console.log(this.registros);
      }, error => {
        console.log(error);
      }
    )
  }
  eleminar(_id:any){
    console.log(_id);
  }

}
