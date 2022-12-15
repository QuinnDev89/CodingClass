import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singnup',
  templateUrl: './singnup.component.html',
  styleUrls: ['./singnup.component.css']
})
export class SingnupComponent implements OnInit {



  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(): void {

  }

  public onSignUp(usuario: {userName: string,userEmail: string,userPass:string}):void{
      console.log(usuario);
      this.http.post('http://192.168.1.3:3000/addUser',usuario)
      .subscribe((res) => {
        console.log(res);
      })
  }

}
