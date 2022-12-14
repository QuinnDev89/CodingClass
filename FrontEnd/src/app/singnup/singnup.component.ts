import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css']
})
export class SingnupComponent implements OnInit {

  public nombreUsuario: string = "";
  public correoUsuario: string = "";
  public contrasenaUsuario: string = "";


  constructor() { 
    
  }

  ngOnInit(): void {
    let nombreArchivo = "usuarios.txt";
    let contenidoArhivo = "";
  }

  public registrarUsuario():void{
    
  }

}
