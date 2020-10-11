import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../model/productos';

@Injectable({
  providedIn: 'root'
})
export class TestServiService {

  constructor(private http: HttpClient) { }
  Url = 'http://localhost:7070/productos';
  getProductId(id: String) {
    return this.http.get(`${this.Url}/buscar/${id}`);
  }
  updateProducto(producto:Productos){
    return this.http.put<Productos>(this.Url+"/editarProducto/"+producto.idProductos,producto);
  }
}
