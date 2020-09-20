import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HeaderComponent} from './componentes/header/header.component';
import { FooterComponent} from './componentes/footer/footer.component';
import { HomeComponent } from './componentes/home/home.component';
import {RegistrarLoginComponent} from './componentes/registrar-login/registrar-login.component';
import { ListallproductComponent} from './componentes/listallproduct/listallproduct.component';

import { FormsModule } from '@angular/forms';
import { PersonaControllerService } from '.';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegistrarLoginComponent,
    ListallproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonaControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
