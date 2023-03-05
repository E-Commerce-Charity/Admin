import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Orders';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css'],
})
export class OrdersListComponent implements OnInit {
  orders: any;
  data: any;
  constructor(private ordersService: OrderService, http: HttpClient) {}

  ngOnInit(): void {
    this.GetOrder();
  }

  GetOrder() {
    this.ordersService.getOrders().subscribe((res) => {
      console.log(res);
      this.data = res;
      console.log(this.data.totalOredrPrice);
      this.orders = this.data.data;
    });
  }

  // showOrder(orderId) {
  //   this.router.navigateByUrl(`orders/${orderId}`);
  // }
}
