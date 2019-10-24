import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ProductService {
  _albumUrl: string = "../assets/album.json";
  constructor(private _http: Http) {}

  getAlbum(id: Number) {
    return this._http.get(this._albumUrl).map(response => response.json());
  }
}
