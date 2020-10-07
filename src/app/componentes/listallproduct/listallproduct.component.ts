import { Component, OnInit } from '@angular/core';
import { ProductoControllerService } from '../../api/productoController.service';
import { Productos } from '../../model/productos';

@Component({
  selector: 'app-listallproduct',
  templateUrl: './listallproduct.component.html',
  styleUrls: ['./listallproduct.component.css']
})
export class ListallproductComponent implements OnInit {
  productos: Productos[];
  nombre: string;
  constructor(private service: ProductoControllerService) { }

  ngOnInit(): void {
    this.listarProductos();
    this.nombre = '';
  }
  private searchPublicacion() {
    this.service.findByQueryUsingGET(this.nombre)
      .subscribe(productos => this.productos = productos);
  }

  onSubmit() {
    this.searchPublicacion();
  }

  listarProductos() {
    this.service.listarProductosUsingGET()
      .subscribe(data => {
        this.productos = data;
      }
      );
  }

  //buscarPubicacion(){
  //this.service.buscarPublicaciones(this.model.cedula).subscribe(datos => {
  //this.publicaciones = datos;
  //console.log(datos);
  //});
  //}
}
