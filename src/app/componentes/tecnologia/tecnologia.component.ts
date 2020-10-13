import { Component, OnInit } from '@angular/core';
import { ProductoControllerService } from '../../api/productoController.service';
import { Productos } from '../../model/productos';
@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {
  productos: Productos[];
  constructor(private service: ProductoControllerService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {
    this.service.findByCategoriaUsingGET('Tecnologia')
      .subscribe(data => {
        this.productos = data;
        console.log( 'categoria', this.productos);
      }
      ); 
  }
  
}
