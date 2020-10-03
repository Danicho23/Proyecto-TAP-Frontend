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
  url=null;
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
  
  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event:any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
}
}
