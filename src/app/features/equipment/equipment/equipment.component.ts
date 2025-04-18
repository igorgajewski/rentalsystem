import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Equipment } from '../../../shared/models/equipment';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-equipment',
  imports: [CommonModule, RouterModule],
  templateUrl: './equipment.component.html',
  styleUrl: './equipment.component.scss'
})
export class EquipmentComponent {
  equipments: Equipment[] = [];
  loading = false;

}
