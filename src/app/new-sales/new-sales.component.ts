import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-new-sales',
  templateUrl: './new-sales.component.html',
  styleUrls: ['./new-sales.component.css']
})
export class NewSalesComponent implements OnInit {
  sales: any[] = [];
  saleForms: FormGroup[] = [];
  newSaleForm!: FormGroup;

  constructor(private salesService: SalesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sales = this.salesService.getSales();
    this.initializeForms();
    this.initNewSaleForm();
  }

  initializeForms() {
    this.saleForms = this.sales.map(sale => this.fb.group({
      departmentName: [sale.departmentName, Validators.required],
      employeesCount: [sale.employeesCount, Validators.required],
      address: [sale.address, Validators.required]
    }));
  }

  initNewSaleForm() {
    this.newSaleForm = this.fb.group({
      departmentName: ['', Validators.required],
      employeesCount: ['', Validators.required],
      address: ['', Validators.required]
    });
  }

  addSale() {
    if (this.newSaleForm.valid) {
      const newSale = this.newSaleForm.value;
      this.salesService.addSale(newSale); // Assuming addSale handles ID generation
      this.sales.push(newSale); // Update the local array
      this.saleForms.push(this.fb.group(newSale)); // Add a form group for the new sale
      this.newSaleForm.reset();
    }
  }

  updateSale(index: number) {
    if (this.saleForms[index].valid) {
      const updatedSale = { id: this.sales[index].id, ...this.saleForms[index].value };
      this.salesService.updateSale(updatedSale);
      this.sales[index] = updatedSale; // Update the local array
    }
  }
}