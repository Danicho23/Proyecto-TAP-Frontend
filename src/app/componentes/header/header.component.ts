import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
import { Usuario } from '../../model/usuario';
import {HomeComponent} from '../home/home.component';
import {variablesglobal} from '../varglobales/variablesglobal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() usuarioid: string = 'Usuario'; //hijo - resive una propiedad de afuera 
  emailid = variablesglobal.idUserEmail
  constructor() { 
    console.log('hola'+this.emailid);
  }

  ngOnInit(): void {
    
  }

}
