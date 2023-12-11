import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: any[] = [
    // { productName: 'Chawal', quantity: 30, price: 500 },
    // { productName: 'Atta', quantity: 500, price: 500 },
    // { productName: 'Gehu', quantity: 60, price: 500 },
    // { productName: 'Makka', quantity: 10, price: 500 },
    // { productName: 'Bajra', quantity: 2, price: 500 }
  ];

  constructor() { }

  getProducts(): any[] {
    return this.products;
  }

  addProduct(newProduct: any) {
    this.products.push(newProduct);
  }
}
