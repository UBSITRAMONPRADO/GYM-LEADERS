import { Component } from '@angular/core';
import { TrainerDisplay } from './trainer-display/trainer-display';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrainerDisplay],
  template: `
    <app-trainer-display></app-trainer-display>
  `
})
export class AppComponent {}