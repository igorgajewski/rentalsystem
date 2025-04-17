import { Component } from '@angular/core';
import { Client } from '../../models/client';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

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
