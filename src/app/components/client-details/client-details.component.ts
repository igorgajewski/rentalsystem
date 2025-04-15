import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../../models/client';
import { ApiService } from '../../services/api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-details',
  imports: [],
  templateUrl: './client-details.component.html',
  styleUrl: './client-details.component.scss'
})
export class ClientDetailsComponent {
  client: Client | undefined;
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
}
