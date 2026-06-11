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
  selector: 'app-kanto',
  standalone: true,
  imports: [],
  templateUrl: './kanto.component.html',
  styleUrl: './kanto.component.css',
})
export class KantoComponent {
  leaders = signal<GymLeader[]>([
    {
      name: 'Brock',
      town: 'Pewter City',
      specialty: 'Rock',
      badge: 'Boulder Badge',
      badgeImg: 'Boulder.png',
      team: ['Geodude', 'Onix'],
    },
    {
      name: 'Misty',
      town: 'Cerulean City',
      specialty: 'Water',
      badge: 'Cascade Badge',
      badgeImg: 'Cascade.png',
      team: ['Staryu', 'Starmie'],
    },
    {
      name: 'Lt. Surge',
      town: 'Vermilion City',
      specialty: 'Electric',
      badge: 'Thunder Badge',
      badgeImg: 'Thunder.png',
      team: ['Voltorb', 'Pikachu', 'Raichu'],
    },
    {
      name: 'Erika',
      town: 'Celadon City',
      specialty: 'Grass',
      badge: 'Rainbow Badge',
      badgeImg: 'Rainbow.png',
      team: ['Victreebel', 'Tangela', 'Vileplume'],
    },
    {
      name: 'Koga',
      town: 'Fuchsia City',
      specialty: 'Poison',
      badge: 'Soul Badge',
      badgeImg: 'Soul.png',
      team: ['Koffing', 'Muk', 'Koffing', 'Weezing'],
    },
    {
      name: 'Sabrina',
      town: 'Saffron City',
      specialty: 'Psychic',
      badge: 'Marsh Badge',
      badgeImg: 'Marsh.png',
      team: ['Kadabra', 'Mr. Mime', 'Venomoth', 'Alakazam'],
    },
    {
      name: 'Blaine',
      town: 'Cinnabar Island',
      specialty: 'Fire',
      badge: 'Volcano Badge',
      badgeImg: 'Volcano.png',
      team: ['Growlithe', 'Ponyta', 'Rapidash', 'Arcanine'],
    },
    {
      name: 'Giovanni',
      town: 'Viridian City',
      specialty: 'Ground',
      badge: 'Earth Badge',
      badgeImg: 'Earth.png',
      team: ['Rhyhorn', 'Dugtrio', 'Nidoqueen', 'Nidoking', 'Rhydon'],
    },
  ]);
}
