import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AboutComponent } from './about/about.component';
import { ArbolesApuntesComponent } from './arboles-apuntes/arboles-apuntes.component';
import { GrafosApuntesComponent } from './grafos-apuntes/grafos-apuntes.component';
import { PilasApuntesComponent } from './pilas-apuntes/pilas-apuntes.component';
import { ListasApuntesComponent } from './listas-apuntes/listas-apuntes.component';
import { ColasApuntesComponent } from './colas-apuntes/colas-apuntes.component';
import { YtproviderPipe } from './ytprovider.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { TeachersComponent } from './teachers/teachers.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { SingnupComponent } from './singnup/singnup.component';
import { LogingComponent } from './loging/loging.component';
import { BlogComponent } from './blog/blog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { SingleComponent } from './single/single.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AboutComponent,
    ArbolesApuntesComponent,
    GrafosApuntesComponent,
    PilasApuntesComponent,
    ListasApuntesComponent,
    ColasApuntesComponent,
    YtproviderPipe,
    NavbarComponent,
    TeachersComponent,
    FooterComponent,
    CoursesComponent,
    SingnupComponent,
    LogingComponent,
    BlogComponent,
    EjerciciosComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
