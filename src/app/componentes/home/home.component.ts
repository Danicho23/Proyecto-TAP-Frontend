import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Usuario} from 'src/app/model/usuario';
import {UsuarioControllerService} from 'src/app/api/usuarioController.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: Usuario = {
    id: null,
    idPersona: null,
    password: null,
    userName: null,
    userType: null
  }
  msg='';

  constructor(private serviceUser: UsuarioControllerService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.serviceUser.saveCategoriaUsingPOST2(this.user).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['/logeado']);
      },
      erro=>{
        this.msg="credenciales incorrectos";
      }
    );
  }

}
