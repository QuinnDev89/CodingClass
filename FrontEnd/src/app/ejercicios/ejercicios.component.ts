import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css']
})
export class EjerciciosComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  enviarEjercicios1(codigo: {codigo: String}):void {
    console.log(codigo);
      this.http.post('http://192.168.0.9:3000/addCode',codigo)
      .subscribe((res) => {
        console.log(res);
        var resultado = document.getElementById("res1")
        if(resultado!= null){
          resultado.innerHTML = "<p>" + res + "</p>";
        }
      })

  }

  enviarEjercicios2(codigo: {codigo: String}):void {
    console.log(codigo);
      this.http.post('http://192.168.0.9:3000/addCode',codigo)
      .subscribe((res) => {
        console.log(res);
        var resultado = document.getElementById("res2")
        if(resultado!= null){
          resultado.innerHTML = "<p>" + res + "</p>";
        }
      })

  }

  enviarEjercicios3(codigo: {codigo: String}):void {
    console.log(codigo);
      this.http.post('http://192.168.0.9:3000/addCode',codigo)
      .subscribe((res) => {
        console.log(res);
        var resultado = document.getElementById("res3")
        if(resultado!= null){
          resultado.innerHTML = "<p>" + res + "</p>";
        }
      })

  }

  enviarEjercicios4(codigo: {codigo: String}):void {
    console.log(codigo);
      this.http.post('http://192.168.0.9:3000/addCode',codigo)
      .subscribe((res) => {
        console.log(res);
        var resultado = document.getElementById("res4")
        if(resultado!= null){
          resultado.innerHTML = "<p>" + res + "</p>";
        }
      })

  }

  enviarEjercicios5(codigo: {codigo: String}):void {
    console.log(codigo);
      this.http.post('http://192.168.0.9:3000/addCode',codigo)
      .subscribe((res) => {
        console.log(res);
        var resultado = document.getElementById("res5")
        if(resultado!= null){
          resultado.innerHTML = "<p>" + res + "</p>";
        }
      })

  }

  enviarEjercicios6(codigo: {codigo: String}):void {
    console.log(codigo);
      this.http.post('http://192.168.0.9:3000/addCode',codigo)
      .subscribe((res) => {
        console.log(res);
        var resultado = document.getElementById("res6")
        if(resultado!= null){
          resultado.innerHTML = "<p>" + res + "</p>";
        }
      })

  }

}
