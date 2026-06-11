import { Component, signal } from '@angular/core';

interface GymLeader {
  name: string;
  town: string;
  specialty: string;
  badge: string;
  badgeImg: string;
  team: string[];
}

@Component({
  selector: 'app-johto',
  standalone: true,
  imports: [],
  templateUrl: './johto.component.html',
  styleUrl: './johto.component.css',
})
export class JohtoComponent {
  leaders = signal<GymLeader[]>([
    {
      name: 'Falkner',
      town: 'Violet City',
      specialty: 'Flying',
      badge: 'Zephyr Badge',
      badgeImg: 'zephy.png',
      team: ['Pidgey', 'Pidgeotto'],
    },
    {
      name: 'Bugsy',
      town: 'Azalea Town',
      specialty: 'Bug',
      badge: 'Hive Badge',
      badgeImg: 'hive.png',
      team: ['Metapod', 'Kakuna', 'Scyther'],
    },
    {
      name: 'Whitney',
      town: 'Goldenrod City',
      specialty: 'Normal',
      badge: 'Plain Badge',
      badgeImg: 'plain.png',
      team: ['Clefairy', 'Miltank'],
    },
    {
      name: 'Morty',
      town: 'Ecruteak City',
      specialty: 'Ghost',
      badge: 'Fog Badge',
      badgeImg: 'fog.png',
      team: ['Gastly', 'Haunter', 'Haunter', 'Gengar'],
    },
    {
      name: 'Chuck',
      town: 'Cianwood City',
      specialty: 'Fighting',
      badge: 'Storm Badge',
      badgeImg: 'storm.png',
      team: ['Primeape', 'Poliwrath'],
    },
    {
      name: 'Jasmine',
      town: 'Olivine City',
      specialty: 'Steel',
      badge: 'Mineral Badge',
      badgeImg: 'mineral.png',
      team: ['Magnemite', 'Magnemite', 'Steelix'],
    },
    {
      name: 'Pryce',
      town: 'Mahogany Town',
      specialty: 'Ice',
      badge: 'Glacier Badge',
      badgeImg: 'glacier.png',
      team: ['Seel', 'Dewgong', 'Piloswine'],
    },
    {
      name: 'Clair',
      town: 'Blackthorn City',
      specialty: 'Dragon',
      badge: 'Rising Badge',
      badgeImg: 'rising.png',
      team: ['Dragonair', 'Dragonair', 'Dragonair', 'Kingdra'],
    },
  ]);
}
