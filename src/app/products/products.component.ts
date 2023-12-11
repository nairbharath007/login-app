import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  products: any[] = []; // Initialize with an empty array
  productForm!: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getProducts();
    this.initProductForm();
  }

  initProductForm() {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      quantity: [0, [Validators.required, Validators.min(0)]], // Quantity should be non-negative
      price: [0, [Validators.required, Validators.min(0)]], // Price should be non-negative
    });
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    if (this.productForm.valid) {
      // Create a new product object from the form values
      const newProduct = this.productForm.value;

      // Add the new product to the product collection
      this.productService.addProduct(newProduct);

      // Clear the form
      this.productForm.reset();

      // Refresh the product list
      this.getProducts();
    }
  }
}
// export class ProductsComponent {
//   products: any = [];

//   quantities = [10, 20, 30, 40, 50];

//   addProductForm = new FormGroup({
//     productName: new FormControl('', [Validators.required]),
//     quantity: new FormControl('', [Validators.required]),
//     price: new FormControl('', [Validators.required])
//   });

//   constructor(private dataService: DataService) { }

//   ngOnInit(): void {
//     this.products = this.dataService.getProducts();
//   }

//   addProduct() {
//     if (this.addProductForm.valid) {
//       this.dataService.addProduct(this.addProductForm.value);
//       this.products = this.dataService.getProducts(); 
//       this.addProductForm.reset();
//     }
//   }

//   // ngOnInit(): void {
//   //   this.dataService.getEmployees().subscribe(data => {
//   //     this.products = data.products;
//   //   });
//   // }

//   // addProduct() {
//   //   if (this.addProductForm.valid) {
//   //     this.products.push(this.addProductForm.value);
//   //     this.addProductForm.reset();
//   //   }
//   // }
// }
