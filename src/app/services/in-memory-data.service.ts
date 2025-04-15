import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Client } from '../models/client';

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
    return {clients};
  }

  // Overrides the genId method to ensure that a client always has an id.
  // If the clients array is empty,
  // the method below returns the initial number (11).
  // if the clients array is not empty, the method below returns the highest
  // client id + 1.

  // yes i copied it from angular docs
  genId(clients: Client[]): number {
    return clients.length > 0 ? Math.max(...clients.map(client => client.id)) + 1 : 1;
  }
}