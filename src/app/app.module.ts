import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HeaderComponent} from './componentes/header/header.component';
import { FooterComponent} from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListallproductComponent} from './componentes/listallproduct/listallproduct.component';

import { FormsModule } from '@angular/forms';
import { PersonaControllerService } from '.';
import { UsuarioControllerService} from '.';
import { ProductoControllerService } from './api/api';
import { AgregarProductoComponent } from './componentes/agregar-producto/agregar-producto.component';
import {TarjetalistallComponent} from './componentes/tarjetalistall/tarjetalistall.component';
import { IngresarProvedorComponent } from './componentes/ingresar-provedor/ingresar-provedor.component';
import { ProvedorControllerService } from './api/provedorController.service';
import { RegistrarUserComponent } from './componentes/registrar-user/registrar-user.component';
import { ListaControlProductosComponent } from './componentes/lista-control-productos/lista-control-productos.component';
import { EditarProductoComponent } from './componentes/editar-producto/editar-producto.component';
import { TecnologiaComponent } from './componentes/tecnologia/tecnologia.component';
import { HogarComponent } from './componentes/hogar/hogar.component';
import { ElectrodomesticosComponent } from './componentes/electrodomesticos/electrodomesticos.component';
import { OtrosProdcutosComponent } from './componentes/otros-prodcutos/otros-prodcutos.component';
import { ComidaComponent } from './componentes/comida/comida.component';
import { HerramientasComponent } from './componentes/herramientas/herramientas.component';
import { VestimentaComponent } from './componentes/vestimenta/vestimenta.component';
import { ListaProveedorComponent } from './componentes/lista-proveedor/lista-proveedor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListallproductComponent,
    AgregarProductoComponent,
    TarjetalistallComponent,
    IngresarProvedorComponent,
    RegistrarUserComponent,
    ListaControlProductosComponent,
    EditarProductoComponent,
    TecnologiaComponent,
    HogarComponent,
    ElectrodomesticosComponent,
    OtrosProdcutosComponent,
    ComidaComponent,
    HerramientasComponent,
    VestimentaComponent,
    ListaProveedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonaControllerService, UsuarioControllerService, ProductoControllerService, ProvedorControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
