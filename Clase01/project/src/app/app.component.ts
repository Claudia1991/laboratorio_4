import { Component } from '@angular/core';
import { Usuario } from './clases/usuario';
import { Numero } from './clases/Numero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  saludar(){
    console.log("Hola rey");
    alert("Hola rey");
  }
  miUsuario: Usuario = new Usuario();
  numeroUno: Numero = new Numero();
  numeroDos: Numero = new Numero();
  promedio: Numero = new Numero();
  suma: Numero = new Numero();

  calcular(){
    if(this.numeroUno.valor && this.numeroDos.valor){
      this.suma.valor = (this.numeroUno.valor + this.numeroDos.valor); 
      this.promedio.valor = this.suma.valor / 2; 
    }
  }
  limpiar(){
    this.numeroUno.valor=null;
    this.numeroDos.valor=null;
    this.promedio.valor=null;
    this.suma.valor=null;
  }
  /**
   * Constructor
   */
  constructor() {

  }
}
