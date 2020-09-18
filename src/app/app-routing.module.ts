import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {TecnologiaComponent} from './componentes/tecnologia/tecnologia.component';
import { HogarComponent } from './componentes/hogar/hogar.component';
import { ElectrodomesticosComponent} from './componentes/electrodomesticos/electrodomesticos.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: 'hogar', component: HogarComponent },
  { path: 'electrodomesticos', component: ElectrodomesticosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
