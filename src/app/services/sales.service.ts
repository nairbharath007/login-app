import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private sales: any[] = [];
  private currentID = 0;

  constructor() { }

  getSales(): any[] {
    return this.sales;
  }

  addSale(newSale: any) {
    this.currentID++
    newSale.id = this.currentID
    this.sales.push(newSale);
  }

  updateSale(updatedSale: any) {
    const index = this.sales.findIndex(sale => sale.id === updatedSale.id);
    if (index !== -1) {
      this.sales[index] = updatedSale;
    }
  }
}
