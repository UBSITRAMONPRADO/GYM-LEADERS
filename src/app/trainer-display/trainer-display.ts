import { Component,inject} from '@angular/core';
import { TrainerService } from '../trainer-service';

@Component({
  selector: 'app-trainer-display',
  standalone: true,
  imports: [],
  templateUrl: './trainer-display.html',
  styleUrl: './trainer-display.css',
})

export class TrainerDisplay {
  trainerService = inject(TrainerService);
}