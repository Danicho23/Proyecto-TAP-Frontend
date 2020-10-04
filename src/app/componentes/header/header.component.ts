import { Component, OnInit, Input,Output ,EventEmitter} from '@angular/core';
import { Usuario } from '../../model/usuario';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() usuarioid: string;
  @Input('userid') useridWind='Usuario';
  
  constructor() { }

  ngOnInit(): void {
  }

}
