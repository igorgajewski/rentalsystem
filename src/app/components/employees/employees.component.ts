import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Employee } from '../../models/employee';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { Role } from '../../models/role';

@Component({
  selector: 'app-employees',
  imports: [CommonModule, RouterModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.scss'
})
export class EmployeesComponent {
  employees: Employee[] = [];
  loading = false;
  public Role = Role;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.loading = true;
    this.api.getEmployees()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(employees => this.employees = employees);
  }
  delete(employee: Employee): void {
    this.employees = this.employees.filter(e => e !== employee);
    this.api.deleteEmployee(employee.id).subscribe();
  }

}
