import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './pages/editar/editar.component';
import { Figura1Component } from './pages/figura1/figura1.component';
import { Figura2Component } from './pages/figura2/figura2.component';
import {SemaforoComponent} from './pages/semaforo/semaforo.component';

const routes: Routes = [
  {path:'',component:Figura1Component},
  {path:'editar',component:EditarComponent},
  {path:'figura2',component:Figura2Component},
  {path:'semaforo',component:SemaforoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
