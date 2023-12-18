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
  products: any[] = []; 
  productForm!: FormGroup;

  quantityOptions: number[] = [];

  constructor(private productService: ProductService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getProducts();
    this.initProductForm();
    this.initQuantityOptions();

  }

  initProductForm() {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.min(3), Validators.pattern(/^[A-Za-z ]+$/)]],
      quantity: [null, [Validators.required, Validators.min(1)]], 
      price: [null, [Validators.required, Validators.min(0.01)]], 
    });
  }

  initQuantityOptions() {
    for (let i = 10; i <= 100; i += 10) {
      this.quantityOptions.push(i);
    }
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }

  addProduct() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;

      this.productService.addProduct(newProduct);

      this.productForm.reset();

      this.getProducts();
    }
  }
}
