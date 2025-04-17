import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { ClientsComponent } from './features/clients/clients/clients.component';
import { EmployeesComponent } from './features/employees/employees/employees.component';
import { EquipmentComponent } from './features/equipment/equipment/equipment.component';
import { RentalsComponent } from './features/rentals/rentals/rentals.component';
import { ClientNewComponent } from './features/clients/client-new/client-new.component';
import { ClientDetailsComponent } from './features/clients/client-details/client-details.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'clients', component: ClientsComponent
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
        path: 'equipment', component: EquipmentComponent
    },
    {
        path: 'rentals', component: RentalsComponent
    }
];
