import { Injectable, signal } from '@angular/core';

export interface GymLeader {
  name: string;
  town: string;
  specialty: string;
  badge: string;
  badgeImg: string;
  team: string[];
}

@Injectable({
  providedIn: 'root',
})
export class HoennService {
  private _leaders = signal<GymLeader[]>([
    {
      name: 'Roxanne',
      town: 'Rustboro City',
      specialty: 'Rock',
      badge: 'Stone Badge',
      badgeImg: 'Stone.png',
      team: ['Geodude', 'Geodude', 'Nosepass'],
    },
    {
      name: 'Brawly',
      town: 'Dewford Town',
      specialty: 'Fighting',
      badge: 'Knuckle Badge',
      badgeImg: 'knuckle.png',
      team: ['Machop', 'Meditite', 'Makuhita'],
    },
    {
      name: 'Wattson',
      town: 'Mauville City',
      specialty: 'Electric',
      badge: 'Dynamo Badge',
      badgeImg: 'Dynamo.png',
      team: ['Voltorb', 'Electrike', 'Magneton', 'Manectric'],
    },
    {
      name: 'Flannery',
      town: 'Lavaridge Town',
      specialty: 'Fire',
      badge: 'Heat Badge',
      badgeImg: 'heat.png',
      team: ['Slugma', 'Slugma', 'Torkoal'],
    },
    {
      name: 'Norman',
      town: 'Petalburg City',
      specialty: 'Normal',
      badge: 'Balance Badge',
      badgeImg: 'balance.png',
      team: ['Spinda', 'Vigoroth', 'Linoone', 'Slaking'],
    },
    {
      name: 'Winona',
      town: 'Fortree City',
      specialty: 'Flying',
      badge: 'Feather Badge',
      badgeImg: 'feather.png',
      team: ['Swablu', 'Tropius', 'Pelipper', 'Skarmory', 'Altaria'],
    },
    {
      name: 'Tate & Liza',
      town: 'Mossdeep City',
      specialty: 'Psychic',
      badge: 'Mind Badge',
      badgeImg: 'Mind.png',
      team: ['Lunatone', 'Solrock'],
    },
    {
      name: 'Juan',
      town: 'Sootopolis City',
      specialty: 'Water',
      badge: 'Rain Badge',
      badgeImg: 'rain.png',
      team: ['Luvdisc', 'Whiscash', 'Sealeo', 'Crawdaunt', 'Kingdra'],
    },
  ]);

  readonly leaders = this._leaders.asReadonly();
}
