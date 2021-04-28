import { Component, OnInit } from '@angular/core';
import {FormGroup,AbstractControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  

  ngOnInit(): void {
  }

  formulario:FormGroup;
  titulo:AbstractControl;
  estado:AbstractControl;
  lista:Array<String>=[];
  listaEnProceso:Array<String>=[];
  listaIniciada:Array<String>=[];
  listaTerminada:Array<String>=[];

  constructor(public fb:FormBuilder) { 
    this.formulario = this.fb.group({
      titulo:['',[Validators.required]],
      estado:['',[Validators.required]],
    });
    this.titulo = this.formulario.controls["titulo"];
    this.estado = this.formulario.controls["estado"];
  }


  
  Crear(event:Event){
    event.preventDefault();
    //let formulario = document.getElementById("formulario") as HTMLFormElement;
    
    if(this.titulo != null && this.estado.value!="iniciada"){
      this.lista.push(this.titulo.value,this.estado.value);
    }

    
      if(this.estado.value == "iniciada"){
        this.listaIniciada.push(this.titulo.value);
      }
      else{
        if(this.estado.value == "En Proceso"){
          this.listaEnProceso.push(this.titulo.value);
        }
        else
        {
          this.listaTerminada.push(this.titulo.value);
        }
      }
      
    

    console.log(this.listaIniciada);
    
  }

  get f(){
    return this.formulario.controls;

  }

  save(event:Event){
    event.preventDefault();
    if(this.formulario.valid){
      const value = this.formulario.value;
      console.log(value);

    }
  }
  borrar(){
    this.listaIniciada.pop();
  }

}
