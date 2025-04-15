import { Component } from '@angular/core';
import { Client } from '../../models/client';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clients',
  imports: [CommonModule, RouterModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  clients: Client[] = [];
  
  constructor(private api: ApiService) {}

  ngOnInit(): void{
    this.getClients();
  }
  getClients() {
    this.api.getClients().subscribe(clients => this.clients = clients)
  }
}
