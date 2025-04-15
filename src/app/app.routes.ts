import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { RentalsComponent } from './components/rentals/rentals.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'clients', component: ClientsComponent
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
