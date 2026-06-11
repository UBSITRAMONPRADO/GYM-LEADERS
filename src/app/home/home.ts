import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Region {
  name: string;
  description: string;
  gymCount: number;
  accent: string;
  route: string;
  emoji: string;
  game: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  regions: Region[] = [
    {
      name: 'Kanto',
      description: 'The original Pokemon region. Home to 8 classic gym leaders and the Elite Four. Features iconic cities like Pallet Town, Cerulean City, and Viridian City.',
      gymCount: 8,
      accent: '#e63946',
      route: '/kanto',
      emoji: '🔴',
      game: 'Pokémon Red / Blue / Yellow',
    },
    {
      name: 'Johto',
      description: 'A region steeped in tradition and mystery. Johto gym leaders are known for their diversity in type specialties and challenging battle styles.',
      gymCount: 8,
      accent: '#f4a261',
      route: '/johto',
      emoji: '🟡',
      game: 'Pokémon Gold / Silver / Crystal',
    },
    {
      name: 'Hoenn',
      description: 'An island region defined by the conflict between Groudon and Kyogre. Hoenn features 8 unique gym leaders across its tropical and volcanic landscape.',
      gymCount: 8,
      accent: '#06d6a0',
      route: '/hoenn',
      emoji: '🟢',
      game: 'Pokémon Ruby / Sapphire / Emerald',
    },
  ];
}