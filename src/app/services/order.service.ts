import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/Orders';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = 'http://localhost:3000/oreders/';

  auth_token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDAyMDE2YTRjMzkwNDBmNTAyNzdmMzEiLCJpYXQiOjE2Nzc5NzI1MTJ9.5KMf8H3yE-URS4rzfn4OAa4kKJwTr6Ce2pZWJ8bzfJw';
  // auth_token = localStorage.getItem('token');
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${this.auth_token}`,
  });
  // header = new HttpHeaders().set('Authorization', 'Bearer ' + this.auth_token);
  // type = new HttpHeaders().set("Content-Type", "multipart/form-data");
  httpOptions = {
    headers: this.headers,
  };
  params = new HttpParams().set('page', '1').set('limit', '37');

  constructor(private http: HttpClient) {}

  getOrders() {
    return this.http.get(this.baseUrl, { headers: this.headers });
  }

  getOrder(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${this.baseUrl}/${orderId}`);
  }

  // deleteOrder(orderId: string): Observable<any> {
  //   return this.http.delete<any>(`${this.baseUrl}/${orderId}`);
  // }
}
