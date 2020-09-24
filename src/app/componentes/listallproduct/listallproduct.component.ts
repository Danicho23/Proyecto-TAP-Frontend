import { Component, OnInit } from '@angular/core';
import { ProductoControllerService } from '../../api/productoController.service';
import { Productos } from '../../model/productos';

@Component({
  selector: 'app-listallproduct',
  templateUrl: './listallproduct.component.html',
  styleUrls: ['./listallproduct.component.css']
})
export class ListallproductComponent implements OnInit {

  constructor(private service: ProductoControllerService) { }
  productos: Productos [];
  ngOnInit(): void {
    this.service.listarPersonasUsingGET2()
    .subscribe(data => {
      this.productos = data;
    }
    );
  }
}
