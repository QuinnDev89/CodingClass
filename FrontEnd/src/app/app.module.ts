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
    YtproviderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
