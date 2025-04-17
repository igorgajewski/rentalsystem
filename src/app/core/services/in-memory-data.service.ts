import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Client } from '../../shared/models/client';
import { Role } from '../../shared/models/role';
import { Employee } from '../../shared/models/employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const clients = [
      { id: 1, name: 'Mark Twain', phone: 123456789, taxNumber: 445566 },
      { id: 2, name: 'George Lucas', phone: 123456789, taxNumber: 445566 },
      { id: 3, name: 'Linus Torvalds', phone: 123456789, taxNumber: 445566 },
      { id: 4, name: 'Harry Potter', phone: 123456789, taxNumber: 445566 },
      { id: 5, name: 'John Rambo', phone: 123456789, taxNumber: 445566 },
      { id: 6, name: 'Kim Possible', phone: 123456789, taxNumber: 445566 }
    ];

    const employees: Employee[] = [
      {
        id: 1,
        name: 'Alice Johnson',
        address: '123 Main St',
        employmentDate: new Date('2021-06-15'),
        phone: '555-123-4567',
        role: Role.Cashier
      },
      {
        id: 2,
        name: 'Bob Smith',
        address: '456 Elm Ave',
        employmentDate: new Date('2020-02-20'),
        phone: '555-987-6543',
        role: Role.Manager
      },
      {
        id: 3,
        name: 'Carol Williams',
        address: '789 Oak Blvd',
        employmentDate: new Date('2019-11-01'),
        phone: '555-222-3333',
        role: Role.Cashier
      },
      {
        id: 4,
        name: 'David Brown',
        address: '321 Pine Rd',
        employmentDate: new Date('2018-08-30'),
        phone: '555-444-5555',
        role: Role.Manager
      },
      {
        id: 5,
        name: 'Eva Green',
        address: '654 Maple Ln',
        employmentDate: new Date('2022-01-10'),
        phone: '555-666-7777',
        role: Role.Cashier
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