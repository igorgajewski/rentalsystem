import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { EmployeesComponent } from './features/employees/employees/employees.component';
import { EquipmentComponent } from './features/equipment/equipment/equipment.component';
import { RentalsComponent } from './features/rentals/rentals/rentals.component';
import { ClientNewComponent } from './features/clients/client-new/client-new.component';
import { ClientDetailsComponent } from './features/clients/client-details/client-details.component';
import { EmployeeDetailsComponent } from './features/employees/employee-details/employee-details.component';
import { EmployeeNewComponent } from './features/employees/employee-new/employee-new.component';
import { ClientsListComponent } from './features/clients/clients-list/clients-list.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'clients', component: ClientsListComponent
    },
    {
        path: 'clients/new', component: ClientNewComponent
    },
    {
        path: 'clients/:id', component: ClientDetailsComponent
    },
    {
        path: 'employees', component: EmployeesComponent
    },
    {
        path: 'employees/new', component: EmployeeNewComponent
    },
    {
        path: 'employees/:id', component: EmployeeDetailsComponent
    },
    {
        path: 'equipment', component: EquipmentComponent
    },
    {
        path: 'rentals', component: RentalsComponent
    }
];
