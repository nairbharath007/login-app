import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getEmployees().subscribe(data => {
      this.employees = data.employees;
    });
  }

  
}