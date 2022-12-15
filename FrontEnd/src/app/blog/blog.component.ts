import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
    resultados: any

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://192.168.1.3:3000/getBlogs').subscribe((res) => {
      this.resultados = res
    })
    //Ya recibo los blogs existentes, no deben tener el mismo tema del anterior para solucionar
    //duplicados
  }

  public onBlogUp(blog: {tema: string,autor: string,mensaje:string}):void{
    console.log(JSON.stringify(blog));
    this.http.post('http://192.168.1.3:3000/addBlog',blog)
    .subscribe((res) => {
      console.log(res);
    })
  }
  

}
