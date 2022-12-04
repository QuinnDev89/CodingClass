import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ArbolesApuntesComponent } from './arboles-apuntes/arboles-apuntes.component';
import { ColasApuntesComponent } from './colas-apuntes/colas-apuntes.component';
import { GrafosApuntesComponent } from './grafos-apuntes/grafos-apuntes.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListasApuntesComponent } from './listas-apuntes/listas-apuntes.component';
import { PilasApuntesComponent } from './pilas-apuntes/pilas-apuntes.component';

const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'about',component: AboutComponent},
  {path: 'arboles', component: ArbolesApuntesComponent},
  {path: 'colas', component: ColasApuntesComponent},
  {path: 'grafos', component: GrafosApuntesComponent},
  {path: 'listas', component: ListasApuntesComponent},
  {path: 'pilas', component: PilasApuntesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
