import { Component, OnInit,Output ,EventEmitter } from '@angular/core';
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
  //user: Usuario = new Usuario();
  //user2: Usuario = {id: ''};
  user: Usuario = {
    id: null,
    password: null
  };
  msg='';

  public iduserMai:string;

  constructor(private serviceUser: UsuarioControllerService, private router: Router) { }

  ngOnInit(): void {
    
  }

  loginUser(){
    this.serviceUser.verificarUsuarioUsingGET(this.user.id, this.user.password).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['all']);
        this.iduserMai = this.user.id;
      },
      error=>{
        console.log(error)
        this.msg="credenciales incorrectos";
      }
    );
    //this.user = new Usuario();
  }

  abrir(){
  this.router.navigate(['registrarUser']);
  }
}
