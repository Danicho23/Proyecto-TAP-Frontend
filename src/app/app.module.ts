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
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ListallproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PersonaControllerService, UsuarioControllerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
