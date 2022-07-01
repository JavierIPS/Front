import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SnosotrosComponent } from './pages/snosotros/snosotros.component';
import { PolerongojoComponent } from './pages/polerongojo/polerongojo.component';
import { PoleronnarutoComponent } from './pages/poleronnaruto/poleronnaruto.component';
import { PoleronluffyComponent } from './pages/poleronluffy/poleronluffy.component';
import { PoleronnezukoComponent } from './pages/poleronnezuko/poleronnezuko.component';
import { PoleronzoroComponent } from './pages/poleronzoro/poleronzoro.component';
import { PoleronspidermanComponent } from './pages/poleronspiderman/poleronspiderman.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { PerfilusuarioComponent } from './pages/perfilusuario/perfilusuario.component';
import { RegistroComponent } from './pages/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SnosotrosComponent,
    PolerongojoComponent,
    PoleronnarutoComponent,
    PoleronluffyComponent,
    PoleronnezukoComponent,
    PoleronzoroComponent,
    PoleronspidermanComponent,
    CatalogoComponent,
    PerfilusuarioComponent,
    RegistroComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
