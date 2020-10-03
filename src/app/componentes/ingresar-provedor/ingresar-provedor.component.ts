import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvedorControllerService } from '../../api/provedorController.service';
import { Proveedor } from '../../model/proveedor';

@Component({
  selector: 'app-ingresar-provedor',
  templateUrl: './ingresar-provedor.component.html',
  styleUrls: ['./ingresar-provedor.component.css']
})
export class IngresarProvedorComponent implements OnInit {

  proveedor: Proveedor = new Proveedor();
  submitted = false;
  constructor(private service: ProvedorControllerService, private router: Router) { }

  ngOnInit(): void {
  }

  newProduct(): void {
    this.submitted = false;
    this.proveedor = new Proveedor();
  }
  save() {
    this.service.saveProveedorUsingPOST(this.proveedor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.proveedor = new Proveedor();

  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  abrir(){
    this.router.navigate(['ingreasarProducto']);
  }

}
