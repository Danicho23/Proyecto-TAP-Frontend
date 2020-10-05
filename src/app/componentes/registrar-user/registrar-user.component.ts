import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaControllerService } from '../../api/personaController.service';
import { Persona } from '../../model/persona';

@Component({
  selector: 'app-registrar-user',
  templateUrl: './registrar-user.component.html',
  styleUrls: ['./registrar-user.component.css']
})
export class RegistrarUserComponent implements OnInit {

  persona: Persona = new Persona();
  submitted = false;
  constructor(private service: PersonaControllerService, private router: Router) { }

  ngOnInit(): void {
  }

  newProduct(): void {
    this.submitted = false;
    this.persona = new Persona();
  }
  save() {
    this.service.savePersonUsingPOST(this.persona)
      .subscribe(data => console.log(data), error => console.log(error));
    this.persona = new Persona();

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  abrir(){
    this.router.navigate(['all']);
  }

}
