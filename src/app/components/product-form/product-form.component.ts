import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  form!: FormGroup;
  categories: Category[];

  category!: Category;
  val: any;
  priceValue: any;
  editMode: boolean = false;
  imgDisplay: any;

  products: Product[] = [];
  isSubmitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private http : HttpClient
  ) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      // imageCover: [null],
      category: ["", [Validators.required]],
      quantity: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      images:[null]
    });
    this.categories = [
      {
        id: "6401e26181e76284cc52b90b",
        name: 'Ramadan bags',
      },
    ];
  }

  ngOnInit(): void {
    this.categories = [
      {
        id: "6401e26181e76284cc52b90b",
        name: 'Ramadan bags',
      
      },
      {
        id: "6401e2a581e76284cc52b90d",
        name: 'Monthly bags',
      
      },
      {
        id: "6401e2c281e76284cc52b90f",
        name: 'meals',
      
      },
    ];
    this.checkEditMode();

    
  }

  onSubmit() {
    this.isSubmitted = true;
    const productFormData = new FormData();

    productFormData.append('title', this.productForm['title'].value);
    // productFormData.append('images', this.productForm['images'].value);
    // productFormData.append('imageCover', this.productForm['imageCover'].value);
    productFormData.append('category', this.productForm['category'].value);
    productFormData.append('price', this.productForm['price'].value);
    productFormData.append('quantity', this.productForm['quantity'].value);
    productFormData.append(
      'description',
      this.productForm['description'].value
    );
    console.log(productFormData);
    this.addProduct(productFormData);
    console.log('we are submitting data');

    console.log(productFormData);
    this.clear();
  }

  addProduct(productData: FormData) {
    console.log('we are sending data to back');
    

    this.productsService.createProduct(productData).subscribe((res :any)=>{
      console.log(res)
    })
  }

  onCancel() {
    this.clear();
  }

  private checkEditMode() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editMode = true;

        console.log(params);
      }
    });
    console.log(this.route.params);

    // this.route.params.subscribe(params => {
    //   if(params['id']){
    //     this.editMode=true
    //     this.productsService.getOneProduct(params['id']).subscribe(product=>{
    //       this.productForm['name'].setValue(product.title)
    //       this.productForm['selectCategory'].setValue(product.category)
    //       this.productForm['num'].setValue(product.quantity)
    //       this.productForm['price'].setValue(product.price)
    //       this.productForm['desc'].setValue(product.description)
    //     })

    //   }
    // })
  }

  get productForm() {
    return this.form.controls;
  }

  clear() {
    this.form.controls['title'].setValue(' ');
    this.form.controls['category'].setValue(' ');
    this.form.controls['quantity'].setValue(0);
    this.form.controls['price'].setValue(0);
    this.form.controls['description'].setValue(' ');
  }

  fileUpload(e: any) {
    console.log(e);
    console.log(e.target.files[0].name);

    const file = e.target.files[0];
    if (!file) {
      return;
    } else {
      this.form.patchValue({ image: file });
      this.form.get('images')?.updateValueAndValidity();
      const filReader = new FileReader();
      filReader.onload = () => {
        this.imgDisplay = filReader.result;
      };
      filReader.readAsDataURL(file);
      console.log(filReader);
    }
  }
}

interface Category {
  id: string;
  name: string;
}
