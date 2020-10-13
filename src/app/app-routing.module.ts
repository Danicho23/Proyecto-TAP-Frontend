import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './componentes/home/home.component';
import { TecnologiaComponent} from './componentes/tecnologia/tecnologia.component';
import { HogarComponent } from './componentes/hogar/hogar.component';
import { ElectrodomesticosComponent} from './componentes/electrodomesticos/electrodomesticos.component';
import { ListallproductComponent} from './componentes/listallproduct/listallproduct.component'
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import { IngresarProvedorComponent } from './componentes/ingresar-provedor/ingresar-provedor.component';
import { RegistrarUserComponent } from './componentes/registrar-user/registrar-user.component';
import { ListaControlProductosComponent } from './componentes/lista-control-productos/lista-control-productos.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { ComidaComponent } from './componentes/comida/comida.component';
import { OtrosProdcutosComponent } from './componentes/otros-prodcutos/otros-prodcutos.component';
import { HerramientasComponent } from './componentes/herramientas/herramientas.component';
import { VestimentaComponent } from './componentes/vestimenta/vestimenta.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: 'ingreasarProducto', component: AgregarProductoComponent },
  { path: 'hogar', component: HogarComponent },
  { path: 'electrodomesticos', component: ElectrodomesticosComponent },
  { path: 'registrarProvedor', component: IngresarProvedorComponent },
  { path: 'registrarUser', component: RegistrarUserComponent},
  { path: 'controlProductos', component: ListaControlProductosComponent},
  { path: 'editarProducto', component: EditarProductoComponent},
  { path: 'vestimenta', component: VestimentaComponent},
  { path: 'herramientas', component: HerramientasComponent},
  { path: 'comida', component: ComidaComponent},
  { path: 'otros', component: OtrosProdcutosComponent},
  { path: 'all', component: ListallproductComponent },
  { path: '', component: ListallproductComponent,pathMatch:'full' },
  { path: '**', redirectTo: '/',pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
