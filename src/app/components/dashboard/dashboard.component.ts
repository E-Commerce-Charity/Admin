import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  userName: string = 'ahmed';

  
  products: product[] = [
    { productTitle: 'meal', date: "2023", productPrice: 10 },
    { productTitle: 'money', date: "2022", productPrice: 10 },
    { productTitle: 'feeding poor', date: "2022", productPrice: 10 },
    { productTitle: 'meal', date: "2022", productPrice: 10 },
  ];

  prices:number[]=this.products.map(product=> product.productPrice)
  totalPrice:number=this.prices.reduce(add, 0); 

}
function add(accumulator:number, a:number) {
  return accumulator + a;
}


interface product {
  productTitle: string,
  date: string,
  productPrice: number,
};
