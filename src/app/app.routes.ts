import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { KantoRegionComponent } from './gym-kanto/gym-kanto';
import { JohtoRegionComponent } from './gym-johto/gym-johto';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'kanto', component: KantoRegionComponent },
  { path: 'johto', component: JohtoRegionComponent }
];