import { Routes } from '@angular/router';
<<<<<<< HEAD

export const routes: Routes = [];
=======
import { HomeComponent } from './home/home';
import { KantoRegionComponent } from './gym-kanto/gym-kanto';
import { JohtoRegionComponent } from './gym-johto/gym-johto';
import { HoennRegionComponent } from './gym-hoenn/gym-hoenn';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: KantoRegionComponent },
  { path: 'johto', component: JohtoRegionComponent },
  { path: 'hoenn', component: HoennRegionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
>>>>>>> d9a905c71c4d0c798d1f1c1d4d6a3dd29bb8a8ca
