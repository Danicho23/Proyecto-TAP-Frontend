import { Component, OnInit } from '@angular/core';
import { ProductoControllerService } from '../../api/productoController.service';
import { Productos } from '../../model/productos';
@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.css']
})
export class HerramientasComponent implements OnInit {
  productos: Productos[];
  constructor(private service: ProductoControllerService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {
    this.service.findByCategoriaUsingGET('Herramientas')
      .subscribe(data => {
        this.productos = data;
        console.log( 'categoria', this.productos);
      }
      ); 
  }
}
