import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  auth_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDAxYjgxNTg3ZDc3NDNhNDA1MzJhNmQiLCJpYXQiOjE2Nzc4MzQyNjF9.hmQeUS8yp7XO2H_xICsbnTun8M037L2soR4bhoectfY';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
  });
  header = new HttpHeaders().set("Authorization", "Bearer " + this.auth_token);
  type = new HttpHeaders().set("Content-Type", "multipart/form-data");


  httpOptions = {
    headers: this.header,
  };

  baseUrl = 'http://localhost:3000/products/'
  constructor(private http: HttpClient) {}
  params = new HttpParams()
    // .set('sort', "description")
    .set('page', '1')
    .set('limit', '6');

  getProduct() {
    return this.http.get(this.baseUrl, {
      params: this.params,
    });
  }


  getOneProduct(productId :any):Observable<Product> {
    return this.http.get<Product>(this.baseUrl+`${productId}`, {
      params: this.params,
    });
  }



  createProduct(product :any){
   return this.http.post(this.baseUrl, product ,this.httpOptions)
  }


  // updateProduct (productId :any){
  //   this.http.post
  // }

  deleteProduct(productId:any){
    this.http.delete(`http://localhost:3000/products/${productId}`,productId)
  }
}
