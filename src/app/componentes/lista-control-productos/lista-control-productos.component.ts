import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoControllerService } from '../../api/productoController.service';
import { Productos } from '../../model/productos';

@Component({
  selector: 'app-lista-control-productos',
  templateUrl: './lista-control-productos.component.html',
  styleUrls: ['./lista-control-productos.component.css']
})
export class ListaControlProductosComponent implements OnInit {
  // variables
  productos: Productos[];
  constructor(private service: ProductoControllerService, private router: Router) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {
    this.service.listarProductosUsingGET()
      .subscribe(data => {
        this.productos = data;
        console.log(this.productos);
      }
      );
  }

  deleteProduct(id: string) {
    this.service.deleteUsingDELETE1(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
    this.listarProductos();
  }

  Editar(productos): void {
    localStorage.setItem("idProductos", productos.idProductos.toString());
    this.router.navigate(['editarProducto']);
  }

}
