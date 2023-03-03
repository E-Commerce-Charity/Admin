import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private router :Router
    ) {
    // this.products = [
    //   {
    //     title: 'productOne',
    //     id: '1',
    //     description: 'loream ipsomjkasjdkalsd lkasj',
    //     quantity: 20,
    //     sold: 10,
    //     price: 100,
    //     category: 'ramdan',
    //   },
    //   {
    //     title: 'product3',
    //     id: '3',
    //     description: 'loream ipsomjkasjdkalsd lkasj',
    //     quantity: 20,
    //     sold: 10,
    //     price: 100,
    //     category: 'monthly',
    //   },
    //   {
    //     title: 'product2',
    //     id: '2',
    //     description: 'loream ipsomjkasjdkalsd lkasj',
    //     quantity: 20,
    //     sold: 10,
    //     price: 100,
    //     category: 'meals',
    //   },
    // ];
  }

  ngOnInit() {
    // this.productService.getProduct().subscribe((res :any)=>{
    //   this.products = res.data;
    // }
    // )
    this.getProducts()
  }

    getProducts() {
       this.productsService.getProduct().subscribe((res: any) => {
        console.log(res);
        this.products=res.data
        console.log('this.products', this.products);
      });
    }


  deleteProduct(id:any){
    console.log("deleted");
    // const newArray = this.products.filter(product=> product.id!==id)
    // this.products=newArray;
    this.productsService.deleteProduct(id);
  }
  // editProduct(id: any) {
  //   console.log("ed")
  //   this.router.navigateByUrl(`products/form/${id}`)
  //   const newArray = this.products.filter(product=> {
  //     product.id!==id
  //   })
    
  // }
  
  
}
