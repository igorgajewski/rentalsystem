import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Client } from '../../../shared/models/client';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-client-details',
  imports: [FormsModule],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.scss'
})
export class ClientDetailsComponent {
  client!: Client;
  constructor(private route: ActivatedRoute, private api: ApiService, private location: Location) { }

  ngOnInit(): void {
    this.getClient();
  }
  getClient(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.api.getClient(id).subscribe(client => this.client = client);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.client){
      this.api.updateClient(this.client).subscribe(() => this.goBack());
    }
  }
}