import { Component, OnInit } from '@angular/core';
import { ProductoControllerService } from '../../api/productoController.service';
import { Productos } from '../../model/productos';
@Component({
  selector: 'app-electrodomesticos',
  templateUrl: './electrodomesticos.component.html',
  styleUrls: ['./electrodomesticos.component.css']
})
export class ElectrodomesticosComponent implements OnInit {
  productos: Productos[];
  constructor(private service: ProductoControllerService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {
    this.service.findByCategoriaUsingGET('Electrodomesticos')
      .subscribe(data => {
        this.productos = data;
        console.log( 'categoria', this.productos);
      }
      ); 
  }
}
