import { Component, OnInit } from '@angular/core';
import { ProductoControllerService } from '../../api/productoController.service';
import { Productos } from '../../model/productos';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto: Productos = new Productos ();
  submitted = false;
  constructor(private service: ProductoControllerService ) { }

  ngOnInit(): void {
  }

  newProduct(): void {
    this.submitted = false;
    this.producto = new Productos ();
  }
  save() {
    this.service.saveProductosUsingPOST(this.producto)
      .subscribe(data => console.log(data), error => console.log(error));
    this.producto = new Productos();
  
  }
 
  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
