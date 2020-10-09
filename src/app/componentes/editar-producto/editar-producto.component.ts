import { Component, OnInit } from '@angular/core';
import { ProductoControllerService } from '../../api/productoController.service';
import { Productos } from '../../model/productos';
import { ProvedorControllerService } from '../../api/provedorController.service';
import { Proveedor } from '../../model/proveedor';
import { Router } from '@angular/router';
import * as AWS from 'aws-sdk';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  constructor(private service: ProductoControllerService, private serviceProveedor: ProvedorControllerService, private router: Router) {
    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:1e78ec2b-1fa0-45a9-92a2-54fc5567a162',
    });
  }

  file: File;
  // variables S3;

  showImagen = false;
  error = false;
  subiendo = false;
  archivo = null;
  urlImagen = null;
  // variables
  producto: Productos = new Productos();
  proveedor: Proveedor [];
  submitted = false;
  url = null;
  // propiedades del bucket
  // sube los archivos de imagenes al bucket
  albumBucketName = 'imagenestienda';
  s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'imagenestienda' },
  });
  photoSelected : string | ArrayBuffer;
  uploadPercent: Observable<number>;

  ngOnInit(): void {
    this.serviceProveedor.listarProvedorUsingGET()
      .subscribe(data => {
        this.proveedor = data;
      }
      );
  }

  newProduct(): void {
    this.submitted = false;
    this.producto = new Productos();
  }
  save() {
    this.service.saveProductosUsingPOST(this.producto)
      .subscribe(data => console.log(data), error => console.log(error));
      console.log(this.producto);
    this.producto = new Productos();
    

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.producto),
    this.producto.imagen=this.urlImagen;
    console.log(this.producto.imagen);
    this.save();
  }
  abrir() {
    this.router.navigate(['ingreasarProducto']);
  }

  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.url = event.target.result;
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }
  onClickSubir = async (event) => {
    event.preventDefault();
    if (this.archivo) {
      try {
        this.subiendo = true;
        const data = await new AWS.S3.ManagedUpload({
          params: {
            Bucket: this.albumBucketName,
            Key: this.archivo.name,
            Body: this.archivo,
            ACL: 'public-read',
          },
        }).promise();

        this.urlImagen = data.Location;
        this.subiendo = false;
        this.showImagen = true;
      } catch (error) {
        this.error = true;
        const bucle = setInterval(() => {
          this.error = false;
          clearInterval(bucle);
        }, 2000);
      }
    } else {
      alert('Seleccione una imagen del producto !!!');
    }
  };
  onChange = (event) => {
    if (event.target.files.length > 0) {
      this.archivo = event.target.files[0];
      const reader = new FileReader();
        reader.onload = e => this.photoSelected =reader.result;
        reader.readAsDataURL(this.archivo);
    }
  };

}
