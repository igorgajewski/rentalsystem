import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private clientsUrl = 'api/clients'
  private employeesUrl = 'api/employees'

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

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }
  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url);
  }
  updateEmployee(employee: Employee): Observable<any> {
    return this.http.put(this.employeesUrl, employee, this.httpOptions);
  }
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions);
  }
  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.delete<Employee>(url, this.httpOptions);
  }
}
