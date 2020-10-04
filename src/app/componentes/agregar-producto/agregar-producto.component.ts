import { Component, OnInit } from '@angular/core';
import { ProductoControllerService } from '../../api/productoController.service';
import { Productos } from '../../model/productos';
import { ProvedorControllerService } from '../../api/provedorController.service';
import { Proveedor } from '../../model/proveedor';
import { Router } from '@angular/router';
import * as AWS from 'aws-sdk';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  // variables S3;
  showImagen = false;
  error = false;
  subiendo = false;
  archivo = null;
  urlImagen = null;
  // variables
  producto: Productos = new Productos();
  proveedor: Proveedor[];
  submitted = false;
  url = null;
  // propiedades del bucket
  // sube los archivos de imagenes al bucket
  albumBucketName = 'imagenestienda';
  s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'imagenestienda' },
  });
  constructor(private service: ProductoControllerService, private serviceProveedor: ProvedorControllerService, private router: Router) {
    AWS.config.region = 'us-east-1'; // Región
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'us-east-1:e53ce7d1-41a5-4c4a-8d9e-8f9ccc70ee69',
    })
  }

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
    this.producto = new Productos();

  }

  onSubmit() {
    this.submitted = true;
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
      alert('SELECCIONE UN ARCHIVO');
    }
  };
  onChange = (event) => {
    if (event.target.files.length > 0) {
      this.archivo = event.target.files[0];
    }
  };

}
