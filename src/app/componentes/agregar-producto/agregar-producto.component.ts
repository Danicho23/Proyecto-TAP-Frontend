import { Component, OnInit } from '@angular/core';
import { ProductoControllerService } from '../../api/productoController.service';
import { Productos } from '../../model/productos';
import { ProvedorControllerService } from '../../api/provedorController.service';
import { Proveedor } from '../../model/proveedor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto: Productos = new Productos ();
  proveedor: Proveedor[];
  submitted = false;
  url=null;
  constructor(private service: ProductoControllerService, private serviceProveedor: ProvedorControllerService,  private router: Router) { }

  ngOnInit(): void {
    this.serviceProveedor.listarProvedorUsingGET()
      .subscribe(data => {
        this.proveedor = data;
      }
      );
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
  abrir(){
    this.router.navigate(['ingreasarProducto']);
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
