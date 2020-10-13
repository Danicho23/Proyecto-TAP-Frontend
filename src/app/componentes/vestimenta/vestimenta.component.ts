import { Component, OnInit } from '@angular/core';
import { ProductoControllerService } from '../../api/productoController.service';
import { Productos } from '../../model/productos';
@Component({
  selector: 'app-vestimenta',
  templateUrl: './vestimenta.component.html',
  styleUrls: ['./vestimenta.component.css']
})
export class VestimentaComponent implements OnInit {

  productos: Productos[];
  constructor(private service: ProductoControllerService) { }

  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {
    this.service.findByCategoriaUsingGET('Vestimenta')
      .subscribe(data => {
        this.productos = data;
        console.log( 'categoria', this.productos);
      }
      ); 
  }
}
