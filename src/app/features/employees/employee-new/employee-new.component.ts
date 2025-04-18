import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { Employee, Role } from '../../../shared/models/employee';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-employee-new',
  imports: [FormsModule, CommonModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './employee-new.component.html',
  styleUrl: './employee-new.component.scss'
})
export class EmployeeNewComponent {
  employee: Employee = {
    id: 0, name: '', employmentDate: new Date(), phone: '', role: Role.Cashier,
    address: '', managerId: 0
  }

  public Role = Role;
  public roleOptions = (Object.keys(Role)
    .filter(k => isNaN(Number(k)))
  ) as Array<keyof typeof Role>;

  constructor(
    private api: ApiService,
    private location: Location
  ) {}

  add(): void {
    // send to backend (in‑memory API will assign a real id)
    this.api.addEmployee(this.employee)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
