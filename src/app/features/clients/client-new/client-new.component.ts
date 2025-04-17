import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { Client } from '../../../shared/models/client';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-client-new',
  imports: [FormsModule, CommonModule],
  templateUrl: './client-new.component.html',
  styleUrl: './client-new.component.scss'
})
export class ClientNewComponent {
  client: Client = { id: 0, name: '', phone: '', taxNumber: '' };
  constructor(private api: ApiService, private location: Location) { }

  goBack(): void {
    this.location.back();
  }

  add(): void {
    this.client.name = this.client.name.trim();
    this.client.phone = this.client.phone.trim();
    this.client.taxNumber = this.client.taxNumber.trim();
    this.api.addClient(this.client).subscribe(() => this.goBack());
  }
}
