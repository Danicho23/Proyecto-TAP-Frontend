import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Persona} from 'src/app/model/persona'
import {PersonaControllerService} from 'src/app/api/personaController.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  person: Persona = {
    apellido:null,
    cedula: null,
    email:null,
    idPersona: null,
    telefono: null
  }
  msg='';

  constructor(private servicePers: PersonaControllerService, private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.servicePers.savePersonUsingPOST(this.person).subscribe(
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
