import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { Employee, Role, validateEmployee } from '../../../shared/models/employee';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-employee-details',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss'
})
export class EmployeeDetailsComponent {
  employee!: Employee;
  public Role = Role;

  public roleOptions = Object.keys(Role).filter(k => isNaN(Number(k))) as Array<keyof typeof Role>;

  constructor(private route: ActivatedRoute, private api: ApiService, private location: Location) { }

  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.api.getEmployee(id).subscribe(employee => this.employee = employee);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.employee) {
      validateEmployee(this.employee)
      this.api.updateEmployee(this.employee).subscribe(() => this.goBack());
    }
  }
}
