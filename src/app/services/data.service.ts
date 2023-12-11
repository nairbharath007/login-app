import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = 'assets/data.json';
  private localStorageKey = 'myAppData';

  constructor(private http: HttpClient) {
    this.initializeLocalStorage();
  }

  private initializeLocalStorage() {
    if (!localStorage.getItem(this.localStorageKey)) {
      this.http.get(this.dataUrl).subscribe(data => {
        localStorage.setItem(this.localStorageKey, JSON.stringify(data));
      });
    }
  }

  getProducts(): Observable<any> {
    const localData = JSON.parse(localStorage.getItem(this.localStorageKey) || '{}');
    return localData.products || [];
  }

  getSales(): Observable<any> {
    const localData = JSON.parse(localStorage.getItem(this.localStorageKey) || '{}');
    return localData.sales || [];
  }


  addProduct(product: any) {
    const localData = JSON.parse(localStorage.getItem(this.localStorageKey) || '{}');
    localData.products = localData.products || [];
    localData.products.push(product);
    localStorage.setItem(this.localStorageKey, JSON.stringify(localData));
  }


  getEmployees(): Observable<any> {
    return this.http.get(this.dataUrl);
  }

  // Add methods for products and sales

  // addProduct(product: any) {
  //   // This would be a HTTP POST request in a real application
  //   console.log('Product added:', product);
  //   // return this.http.post(this.dataUrl);
  // }
}

