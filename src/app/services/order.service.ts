import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/Orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl = 'http://localhost:3000/oreders/'


  auth_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDAxYjgxNTg3ZDc3NDNhNDA1MzJhNmQiLCJpYXQiOjE2Nzc4MzQyNjF9.hmQeUS8yp7XO2H_xICsbnTun8M037L2soR4bhoectfY';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    "Authorization": `Bearer ${this.auth_token}`,
  });
  header = new HttpHeaders().set("Authorization", "Bearer " + this.auth_token);
  type = new HttpHeaders().set("Content-Type", "multipart/form-data");
  httpOptions = {
    headers: this.header,
  };
  params = new HttpParams().set('page', '1').set('limit', '37');

  constructor(private http: HttpClient) {}

  getOrders() {
     this.http.get(this.baseUrl);
  }

  getOrder(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/${orderId}`);
  }




  // deleteOrder(orderId: string): Observable<any> {
  //   return this.http.delete<any>(`${this.baseUrl}/${orderId}`);
  // }
}
