import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Productos } from 'src/app';
import { ProductoControllerService } from 'src/app/api/productoController.service';
import { Proveedor } from '../../model/proveedor';
import { ProvedorControllerService } from '../../api/provedorController.service';

@Component({
  selector: 'app-lista-proveedor',
  templateUrl: './lista-proveedor.component.html',
  styleUrls: ['./lista-proveedor.component.css']
})
export class ListaProveedorComponent implements OnInit {

  proveedor: Proveedor[];
  constructor(private service: ProvedorControllerService, private router: Router) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {
    this.service.listarProvedorUsingGET()
      .subscribe(data => {
        this.proveedor = data;
        console.log(this.proveedor);
      }
      );
  }
  deleteProveedor(id: string) {
    this.service.deleteUsingDELETE2(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
    this.listarProductos();
  }

}
