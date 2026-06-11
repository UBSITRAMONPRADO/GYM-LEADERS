import { Component, inject } from '@angular/core';
import { LeaderInfoComponent } from '../gym-leader/gym-leader';
import { HoennGymLeadersService } from './gym-hoenn.service';

@Component({
  selector: 'app-hoenn-region',
  standalone: true,
  imports: [LeaderInfoComponent],
  templateUrl: './gym-hoenn.html',
  styleUrls: ['./gym-hoenn.css']
})
export class HoennRegionComponent {
  private readonly hoennService = inject(HoennGymLeadersService);
  readonly gymLeaders = this.hoennService.gymLeaders;
}
