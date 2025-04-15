import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private clientsUrl = 'api/clients'

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.clientsUrl)
  }

  getClient(id: number): Observable<Client>{
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get<Client>(url)
  }
}
