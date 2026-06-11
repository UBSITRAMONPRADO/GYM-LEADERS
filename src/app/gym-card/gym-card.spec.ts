import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gym-card',
  standalone: true,
  templateUrl: './gym-card.html',
  styleUrl: './gym-card.css'
})
export class GymCard {

  @Input() leader: any;

}