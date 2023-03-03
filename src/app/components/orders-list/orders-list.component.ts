import { HttpClient, HttpParams } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { Order } from 'src/app/models/Orders';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit{
  
  orders: Order[] = [];
  
  params = new HttpParams().set('page', '1').set('limit', '37');
  http: any;
  headers: any;


  constructor(private ordersService :OrderService ,http :HttpClient){}


  ngOnInit(): void {
    this.GetOrder()
  }

  GetOrder() {
   this.ordersService.getOrders()
  }

  // showOrder(orderId) {
  //   this.router.navigateByUrl(`orders/${orderId}`);
  // }

}
