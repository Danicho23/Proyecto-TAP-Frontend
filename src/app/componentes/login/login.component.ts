import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { PersonaControllerService } from '../../api/personaController.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: PersonaControllerService) { }
  persona: Persona [];
  ngOnInit(): void {
    this.service.listarPersonasUsingGET()
    .subscribe(data => {
      this.persona = data;
    }
    );
  }

}
