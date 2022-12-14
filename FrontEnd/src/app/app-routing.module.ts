import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArbolesApuntesComponent } from './arboles-apuntes/arboles-apuntes.component';
import { BlogComponent } from './blog/blog.component';
import { ColasApuntesComponent } from './colas-apuntes/colas-apuntes.component';
import { CoursesComponent } from './courses/courses.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { GrafosApuntesComponent } from './grafos-apuntes/grafos-apuntes.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListasApuntesComponent } from './listas-apuntes/listas-apuntes.component';
import { LogingComponent } from './loging/loging.component';
import { PilasApuntesComponent } from './pilas-apuntes/pilas-apuntes.component';
import { SingnupComponent } from './singnup/singnup.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'about',component: AboutComponent},
  {path: 'arboles', component: ArbolesApuntesComponent},
  {path: 'colas', component: ColasApuntesComponent},
  {path: 'grafos', component: GrafosApuntesComponent},
  {path: 'listas', component: ListasApuntesComponent},
  {path: 'pilas', component: PilasApuntesComponent},
  {path: 'teacher', component: TeachersComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'sign', component:SingnupComponent},
  {path: 'login', component:LogingComponent},
  {path: 'blog', component:BlogComponent},
  {path: 'ejercicios', component:EjerciciosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
