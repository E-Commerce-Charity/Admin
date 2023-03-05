import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/category.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  categoryName: string[] = [];
  categoryId: any;
  category: any;
  data: any;
  constructor(
    private productsService: ProductsService,
    private categoryService: CategoriesService,
    private router: Router
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
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProduct().subscribe((res: any) => {
      console.log(res);
      this.products = res.data;
      console.log('this.products', this.products);
      this.categoryName = [];
      for (let i = 0; i < this.products.length; i++) {
        this.categoryId = this.products[i].category;
        this.categoryService.getCategory(this.categoryId).subscribe((res) => {
          this.data = res;
          console.log('category name', this.data.data.name);
          this.categoryName.push(this.data.data.name);
          console.log('category name', this.categoryName);
        });
      }
    });
  }

  deleteProduct(id: any) {
    console.log('deleted');
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

  onSelected(value: any) {
    console.log(value);
    this.category = value;
    if (this.category !== 'null') {
      return this.productsService
        .getProductByCategory(100, this.category)
        .subscribe((res: any) => {
          this.products = res.data;
          this.categoryName = [];
          for (let i = 0; i < this.products.length; i++) {
            this.categoryId = this.products[i].category;
            this.categoryService
              .getCategory(this.categoryId)
              .subscribe((res) => {
                this.data = res;
                this.categoryName.push(this.data.data.name);
              });
          }
        });
    } else {
      return this.getProducts();
    }
  }
}
