import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private clientsUrl = 'api/clients'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.clientsUrl)
  }

  getClient(id: number): Observable<Client>{
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get<Client>(url)
  }

  updateClient(client: Client): Observable<any> {
    return this.http.put(this.clientsUrl, client, this.httpOptions)
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.clientsUrl, client, this.httpOptions)
  }

  deleteClient(id: number): Observable<Client>{
    const url = `${this.clientsUrl}/${id}`;
    return this.http.delete<Client>(url, this.httpOptions)
  }
}
