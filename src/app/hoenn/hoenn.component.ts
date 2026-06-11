import { Component, inject } from '@angular/core';
import { HoennService } from '../hoenn.service';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  imports: [],
  templateUrl: './hoenn.component.html',
  styleUrl: './hoenn.component.css',
})
export class HoennComponent {
  private hoennService = inject(HoennService);
  leaders = this.hoennService.leaders;
}
