import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gym-card',
  standalone: true,
  templateUrl: './gym-card.html',
  styleUrl: './gym-card.css'
})
export class GymCardComponent {

  @Input() leader!: any;

  showMoto = false;

  toggleMotto() {
    this.showMoto = !this.showMoto;
  }

}