import { Component } from '@angular/core';
import { Client } from '../../../shared/models/client';
import { ApiService } from '../../../core/services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-clients',
  imports: [CommonModule, RouterModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {
  clients: Client[] = [];
  loading = false;
  
  constructor(private api: ApiService) {}

  ngOnInit(): void{
    this.getClients();
  }
  getClients() {
    this.loading = true;
    this.api.getClients()
    .pipe(
      finalize(() => this.loading = false)
    )
    .subscribe(clients => this.clients = clients);
  }
  delete(client: Client): void {
    this.clients = this.clients.filter(c => c !== client);
    this.api.deleteClient(client.id).subscribe();
  }
}
