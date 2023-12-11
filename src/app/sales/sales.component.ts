import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  sales: any = [];

  quantities = [10, 20, 30, 40, 50];

  addProductForm = new FormGroup({
    productName: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required])
  });

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.sales = this.dataService.getSales();
  }

  addSales() {
    if (this.addProductForm.valid) {
      this.dataService.addProduct(this.addProductForm.value);
      this.sales = this.dataService.getProducts(); // Refresh list
      this.addProductForm.reset();
    }
  }

  // ngOnInit(): void {
  //   this.dataService.getEmployees().subscribe(data => {
  //     this.products = data.products;
  //   });
  // }

  // addProduct() {
  //   if (this.addProductForm.valid) {
  //     this.products.push(this.addProductForm.value);
  //     this.addProductForm.reset();
  //   }
  // }
}

