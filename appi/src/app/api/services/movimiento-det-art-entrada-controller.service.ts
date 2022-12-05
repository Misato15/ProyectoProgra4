/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { DetArtEntrada } from '../models/det-art-entrada';
import { DetArtEntradaPartial } from '../models/det-art-entrada-partial';
import { NewDetArtEntradaInMovimiento } from '../models/new-det-art-entrada-in-movimiento';
import { Count as LoopbackCount } from '../models/loopback/count';

@Injectable({
  providedIn: 'root',
})
export class MovimientoDetArtEntradaControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation movimientoDetArtEntradaControllerFind
   */
  static readonly MovimientoDetArtEntradaControllerFindPath = '/movimientos/{id}/det-art-entradas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `find()` instead.
   *
   * This method doesn't expect any request body.
   */
  find$Response(params: {
    id: string;
    filter?: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<DetArtEntrada>>> {

    const rb = new RequestBuilder(this.rootUrl, MovimientoDetArtEntradaControllerService.MovimientoDetArtEntradaControllerFindPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('filter', params.filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<DetArtEntrada>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `find$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  find(params: {
    id: string;
    filter?: any;
    context?: HttpContext
  }
): Observable<Array<DetArtEntrada>> {

    return this.find$Response(params).pipe(
      map((r: StrictHttpResponse<Array<DetArtEntrada>>) => r.body as Array<DetArtEntrada>)
    );
  }

  /**
   * Path part for operation movimientoDetArtEntradaControllerCreate
   */
  static readonly MovimientoDetArtEntradaControllerCreatePath = '/movimientos/{id}/det-art-entradas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `create()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create$Response(params: {
    id: string;
    context?: HttpContext
    body?: NewDetArtEntradaInMovimiento
  }
): Observable<StrictHttpResponse<DetArtEntrada>> {

    const rb = new RequestBuilder(this.rootUrl, MovimientoDetArtEntradaControllerService.MovimientoDetArtEntradaControllerCreatePath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DetArtEntrada>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `create$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  create(params: {
    id: string;
    context?: HttpContext
    body?: NewDetArtEntradaInMovimiento
  }
): Observable<DetArtEntrada> {

    return this.create$Response(params).pipe(
      map((r: StrictHttpResponse<DetArtEntrada>) => r.body as DetArtEntrada)
    );
  }

  /**
   * Path part for operation movimientoDetArtEntradaControllerDelete
   */
  static readonly MovimientoDetArtEntradaControllerDeletePath = '/movimientos/{id}/det-art-entradas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `delete()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete$Response(params: {
    id: string;
    where?: any;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, MovimientoDetArtEntradaControllerService.MovimientoDetArtEntradaControllerDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('where', params.where, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `delete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  delete(params: {
    id: string;
    where?: any;
    context?: HttpContext
  }
): Observable<LoopbackCount> {

    return this.delete$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

  /**
   * Path part for operation movimientoDetArtEntradaControllerPatch
   */
  static readonly MovimientoDetArtEntradaControllerPatchPath = '/movimientos/{id}/det-art-entradas';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patch()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch$Response(params: {
    id: string;
    where?: any;
    context?: HttpContext
    body?: DetArtEntradaPartial
  }
): Observable<StrictHttpResponse<LoopbackCount>> {

    const rb = new RequestBuilder(this.rootUrl, MovimientoDetArtEntradaControllerService.MovimientoDetArtEntradaControllerPatchPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.query('where', params.where, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<LoopbackCount>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patch$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patch(params: {
    id: string;
    where?: any;
    context?: HttpContext
    body?: DetArtEntradaPartial
  }
): Observable<LoopbackCount> {

    return this.patch$Response(params).pipe(
      map((r: StrictHttpResponse<LoopbackCount>) => r.body as LoopbackCount)
    );
  }

}
