import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Productos } from '../../model/productos';
@Component({
  selector: 'app-tarjetalistall',
  templateUrl: './tarjetalistall.component.html',
  styleUrls: ['./tarjetalistall.component.css']
})
export class TarjetalistallComponent implements OnInit {
  @Input() product: Productos;
  @Input() indice: string;
  @Output() productSelected: EventEmitter<string>;

  constructor() { 
    this.productSelected = new EventEmitter();
  }

  ngOnInit(): void {
  }

}
