import { Component } from '@angular/core';
<<<<<<< HEAD
import { TrainerDisplay } from './trainer-display/trainer-display';

=======
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
>>>>>>> d9a905c71c4d0c798d1f1c1d4d6a3dd29bb8a8ca

@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [TrainerDisplay],
  template: `
    <app-trainer-display></app-trainer-display>
  `
})
export class AppComponent {}
=======
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'GymLeaders';
}
>>>>>>> d9a905c71c4d0c798d1f1c1d4d6a3dd29bb8a8ca
