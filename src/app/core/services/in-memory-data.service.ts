import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee, Role } from '../../shared/models/employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clients = [
      { id: 1, name: 'Mark Twain', phone: '123-456-789', taxNumber: '123' },
      { id: 2, name: 'George Lucas', phone: '123-456-789', taxNumber: '456' },
      { id: 3, name: 'Linus Torvalds', phone: '123-456-789', taxNumber: '789' },
      { id: 4, name: 'Harry Potter', phone: '123-456-789', taxNumber: '101112' },
      { id: 5, name: 'John Rambo', phone: '123-456-789', taxNumber: '131415' },
      { id: 6, name: 'Kim Possible', phone: '123-456-789', taxNumber: '161718' }
    ];

    const employees: Employee[] = [
      {
        id: 1,
        name: 'Alice Johnson',
        address: '123 Main St',
        employmentDate: new Date('2021-06-15'),
        phone: '555-123-456',
        role: Role.Owner
      },
      {
        id: 2,
        name: 'Bob Smith',
        address: '456 Elm Ave',
        employmentDate: new Date('2020-02-20'),
        phone: '555-987-654',
        birthDate: new Date('1995-01-01'),
        role: Role.Manager,
        managerId: 1
      },
      {
        id: 3,
        name: 'Carol Williams',
        address: '789 Oak Blvd',
        employmentDate: new Date('2019-11-01'),
        phone: '555-222-333',
        role: Role.Cashier,
        managerId: 2
      },
      {
        id: 4,
        name: 'David Brown',
        address: '321 Pine Rd',
        employmentDate: new Date('2018-08-30'),
        phone: '555-444-555',
        birthDate: new Date('1994-01-01'),
        role: Role.Cashier,
        managerId: 2
      },
      {
        id: 5,
        name: 'Eva Green',
        address: '654 Maple Ln',
        employmentDate: new Date('2022-01-10'),
        phone: '555-666-777',
        role: Role.Cashier,
        managerId: 2
      }
    ];
    return {clients, employees };
  }

  genId<T extends { id: number }>(collection: T[]): number {
    return collection.length > 0
      ? Math.max(...collection.map(item => item.id)) + 1
      : 1;
  }
}