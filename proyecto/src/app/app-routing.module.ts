import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PolerongojoComponent } from './pages/polerongojo/polerongojo.component';
import { PoleronluffyComponent } from './pages/poleronluffy/poleronluffy.component';
import { PoleronnarutoComponent } from './pages/poleronnaruto/poleronnaruto.component';
import { PoleronnezukoComponent } from './pages/poleronnezuko/poleronnezuko.component';
import { PoleronzoroComponent } from './pages/poleronzoro/poleronzoro.component';
import { PoleronspidermanComponent } from './pages/poleronspiderman/poleronspiderman.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { SnosotrosComponent } from './pages/snosotros/snosotros.component';
import { PerfilusuarioComponent } from './pages/perfilusuario/perfilusuario.component';
import { RegistroComponent } from './pages/registro/registro.component';



export const routes: Routes = [

  { 
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  { 
    path: 'home', component: HomeComponent 
  },
  { 
    path: 'login', component: LoginComponent
  },
  {
    path: 'polerongojo', component: PolerongojoComponent
  },
  {
    path: 'poleronluffy', component: PoleronluffyComponent
  },
  {
    path: 'poleronnaruto', component: PoleronnarutoComponent
  },
  {
    path: 'poleronnezuko', component: PoleronnezukoComponent
  },
  {
    path: 'poleronzoro', component: PoleronzoroComponent
  },
  {
    path: 'poleronspiderman', component: PoleronspidermanComponent
  },
  {
    path: 'catalogo', component: CatalogoComponent
  },
  {
    path: 'snosotros', component: SnosotrosComponent
  },
  {
    path: 'perfilusuario', component: PerfilusuarioComponent
  },
  {
    path: 'registro', component: RegistroComponent
  },


]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }