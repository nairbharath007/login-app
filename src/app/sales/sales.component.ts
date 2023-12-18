import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  sales: any[] = [];
  saleForm!: FormGroup;
  isEditMode: boolean = false;
  currentSaleId: number | null = null;

  constructor(private salesService: SalesService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sales = this.salesService.getSales();
    this.initSaleForm();
  }

  initSaleForm() {
    this.saleForm = this.fb.group({
      departmentName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^[A-Za-z ]+$/)]], 
      employeesCount: ['', [Validators.required, Validators.min(1)]], 
      address: ['', Validators.required] 
    });
  }

  submitForm() {
    if (this.saleForm.valid) {
      if (this.isEditMode && this.currentSaleId !== null) {
        const updatedSale = { id: this.currentSaleId, ...this.saleForm.value };
        this.salesService.updateSale(updatedSale);
      } else {
        this.salesService.addSale(this.saleForm.value);
      }
      this.resetForm();
      this.sales = this.salesService.getSales();
    }
  }

  resetForm() {
    this.saleForm.reset();
    this.isEditMode = false;
    this.currentSaleId = null;
  }

  startEdit(sale: any) {
    this.isEditMode = true;
    this.currentSaleId = sale.id;
    this.saleForm.patchValue(sale);
  }
}