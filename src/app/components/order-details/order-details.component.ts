import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/models/Orders';
import { OrderService } from 'src/app/services/order.service';



@Component({
  selector: 'app-orders-detail',
  templateUrl: './order-details.component.html',
  styles: []
})
export class OrdersDetailComponent implements OnInit {
  order!: Order;
  orderStatuses = [];
  selectedStatus: any;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._getOrder();
  }



  private _getOrder() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.orderService.getOrder(params['id']).subscribe((order) => {
          this.order = order;
        });
      }
    });
  }
}
