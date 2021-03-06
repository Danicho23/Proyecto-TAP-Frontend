/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { OptionalProductos } from '../model/optionalProductos';
import { Productos } from '../model/productos';
import { ResponseEntity } from '../model/responseEntity';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ProductoControllerService {

    protected basePath = '//localhost:7070/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * buscarProductsPorNombre
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public buscarProductsPorNombreUsingGET(id?: string, observe?: 'body', reportProgress?: boolean): Observable<OptionalProductos>;
    public buscarProductsPorNombreUsingGET(id?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<OptionalProductos>>;
    public buscarProductsPorNombreUsingGET(id?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<OptionalProductos>>;
    public buscarProductsPorNombreUsingGET(id?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (id !== undefined && id !== null) {
            queryParameters = queryParameters.set('id', <any>id);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<OptionalProductos>('get',`${this.basePath}/productos/buscar/${encodeURIComponent(String(id))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * delete
     * 
     * @param id id
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteUsingDELETE1(id: string, observe?: 'body', reportProgress?: boolean): Observable<string>;
    public deleteUsingDELETE1(id: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<string>>;
    public deleteUsingDELETE1(id: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<string>>;
    public deleteUsingDELETE1(id: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE1.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<string>('delete',`${this.basePath}/productos/producto/delete/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * editarProdcuto
     * 
     * @param body product
     * @param idProductos idProductos
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public editarProdcutoUsingPUT(body: Productos, idProductos: string, observe?: 'body', reportProgress?: boolean): Observable<Productos>;
    public editarProdcutoUsingPUT(body: Productos, idProductos: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Productos>>;
    public editarProdcutoUsingPUT(body: Productos, idProductos: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Productos>>;
    public editarProdcutoUsingPUT(body: Productos, idProductos: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling editarProdcutoUsingPUT.');
        }

        if (idProductos === null || idProductos === undefined) {
            throw new Error('Required parameter idProductos was null or undefined when calling editarProdcutoUsingPUT.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Productos>('put',`${this.basePath}/productos/editarProducto/${encodeURIComponent(String(idProductos))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findByCategoria
     * 
     * @param categoria categoria
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByCategoriaUsingGET(categoria?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Productos>>;
    public findByCategoriaUsingGET(categoria?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Productos>>>;
    public findByCategoriaUsingGET(categoria?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Productos>>>;
    public findByCategoriaUsingGET(categoria?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (categoria !== undefined && categoria !== null) {
            queryParameters = queryParameters.set('categoria', <any>categoria);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Productos>>('get',`${this.basePath}/productos/categoria/${encodeURIComponent(String(categoria))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * findByQuery
     * 
     * @param nombreProducto nombreProducto
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public findByQueryUsingGET(nombreProducto?: string, observe?: 'body', reportProgress?: boolean): Observable<Array<Productos>>;
    public findByQueryUsingGET(nombreProducto?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Productos>>>;
    public findByQueryUsingGET(nombreProducto?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Productos>>>;
    public findByQueryUsingGET(nombreProducto?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (nombreProducto !== undefined && nombreProducto !== null) {
            queryParameters = queryParameters.set('nombreProducto', <any>nombreProducto);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Productos>>('get',`${this.basePath}/productos/buscarQuery/${encodeURIComponent(String(nombreProducto))}`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * listarProductos
     * 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public listarProductosUsingGET(observe?: 'body', reportProgress?: boolean): Observable<Array<Productos>>;
    public listarProductosUsingGET(observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Productos>>>;
    public listarProductosUsingGET(observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Productos>>>;
    public listarProductosUsingGET(observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Productos>>('get',`${this.basePath}/productos/list`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * saveProductos
     * 
     * @param body product
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public saveProductosUsingPOST(body: Productos, observe?: 'body', reportProgress?: boolean): Observable<ResponseEntity>;
    public saveProductosUsingPOST(body: Productos, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ResponseEntity>>;
    public saveProductosUsingPOST(body: Productos, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ResponseEntity>>;
    public saveProductosUsingPOST(body: Productos, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling saveProductosUsingPOST.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            '*/*'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<ResponseEntity>('post',`${this.basePath}/productos/saveProductos`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
