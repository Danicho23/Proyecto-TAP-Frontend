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
    IngresarProvedorComponent
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
