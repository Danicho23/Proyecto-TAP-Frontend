import { Component, OnInit } from '@angular/core';
import { ProductoControllerService } from '../../api/productoController.service';
import { Productos } from '../../model/productos';
@Component({
  selector: 'app-otros-prodcutos',
  templateUrl: './otros-prodcutos.component.html',
  styleUrls: ['./otros-prodcutos.component.css']
})
export class OtrosProdcutosComponent implements OnInit {

  productos: Productos[];
  constructor(private service: ProductoControllerService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {
    this.service.findByCategoriaUsingGET('Otros')
      .subscribe(data => {
        this.productos = data;
        console.log( 'categoria', this.productos);
      }
      ); 
  }
}
