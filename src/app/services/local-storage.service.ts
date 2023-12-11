import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  // private storageKey = 'myAppData';
  private localStorageKey = 'myAppData';

  constructor() { }




  // Helper method to get data from local storage
  private getLocalStorageData() {
    const dataJSON = localStorage.getItem(this.localStorageKey);
    return dataJSON ? JSON.parse(dataJSON) : { employees: [] };
  }

   // Helper method to set data to local storage
   private setLocalStorageData(data: any) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(data));
  }

  getEmployees() {
    const data = this.getLocalStorageData();
    return data.employees;
  }

  // // Get data from local storage
  // getData(): any {
  //   const data = localStorage.getItem(this.storageKey);
  //   return data ? JSON.parse(data) : null;
  // }

  // // Save data to local storage
  // saveData(data: any): void {
  //   localStorage.setItem(this.storageKey, JSON.stringify(data));
  // }

  // // Add a new product
  // addProduct(product: any): void {
  //   const data = this.getData() || {};
  //   data.products = data.products || [];
  //   data.products.push(product);
  //   this.saveData(data);
  // }

  // // Update a product
  // updateProduct(updatedProduct: any): void {
  //   const data = this.getData();
  //   const products = data.products;
  //   const index = products.findIndex(p => p.id === updatedProduct.id);
  //   if (index !== -1) {
  //     products[index] = updatedProduct;
  //     this.saveData(data);
  //   }
  // }
}
