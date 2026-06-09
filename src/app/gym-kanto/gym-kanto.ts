import { Component } from '@angular/core';
import { LeaderInfoComponent, GymLeader } from '../gym-leader/gym-leader';

@Component({
  selector: 'app-kanto-region',
  standalone: true,
  imports: [LeaderInfoComponent],
  templateUrl: './gym-kanto.html',
  styleUrls: ['./gym-kanto.css']
})
export class KantoRegionComponent {
  gymLeaders: GymLeader[] = [
    
    {
      name: 'Brock',
      age: 15,
      gymBadge: 'Boulder Badge',
      badgeImage: 'boulder.png',
      location: 'Pewter City',
      nameColor: '#cd9b6a',
      borderColor: '#cd9b6a',
      pokemonTeam: [
        { name: 'Geodude', level: 12 },
        { name: 'Onix', level: 14 }
      ],
      monologue: 'I am Brock! I am Pewter\'s Gym Leader! My rock-hard willpower is evident even in my Pokémon.',
      description: 'Brock specializes in Rock-type Pokémon. He is the first Gym Leader in Kanto and dreams of becoming the world\'s best Pokémon Breeder.',
      motto: 'My Pokémon are ROCK HARD and ROUGH as a BOULDER!'
    },
    {
      name: 'Misty',
      age: 12,
      gymBadge: 'Cascade Badge',
      badgeImage: 'cascade.png',
      location: 'Cerulean City',
      nameColor: '#5bc8f5',
      borderColor: '#5bc8f5',
      pokemonTeam: [
        { name: 'Staryu', level: 18 },
        { name: 'Starmie', level: 21 }
      ],
      monologue: 'Surprise! I\'m MISTY, the water Pokémon expert! My policy is an all-out offensive!',
      description: 'Misty specializes in Water-type Pokémon and is the second Gym Leader in Kanto. She aspires to be the world\'s greatest Water Pokémon Trainer.',
      motto: 'My policy is an all-out offensive with Water-type Pokémon!'
    },
    {
      name: 'Lt. Surge',
      age: 30,
      gymBadge: 'Thunder Badge',
      badgeImage: 'thunder.png',
      location: 'Vermilion City',
      nameColor: '#f5e642',
      borderColor: '#f5e642',
      pokemonTeam: [
        { name: 'Voltorb', level: 21 },
        { name: 'Raichu', level: 24 }
      ],
      monologue: 'Hey, Rookie! I\'m LT. SURGE, the Lightning American! Electric Pokémon saved me during the war!',
      description: 'Lt. Surge is an Electric-type specialist and the third Gym Leader in Kanto. A veteran soldier, he credits his Electric Pokémon with saving his life in battle.',
      motto: 'My RAICHU\'s electric attacks will zap you into paralysis!'
    },
    {
      name: 'Erika',
      age: 24,
      gymBadge: 'Rainbow Badge',
      badgeImage: 'rainbow.png',
      location: 'Celadon City',
      nameColor: '#78e86e',
      borderColor: '#78e86e',
      pokemonTeam: [
        { name: 'Victreebel', level: 29 },
        { name: 'Tangela', level: 24 }
      ],
      monologue: 'Oh... you woke me... I am ERIKA, the CELADON GYM LEADER. I\'m a little drowsy from the scents.',
      description: 'Erika specializes in Grass-type Pokémon and is the fourth Gym Leader in Kanto. She is a teacher of the traditional art of flower arranging.',
      motto: 'My Pokémon are versed in the elegant art of flower arranging.'
    },
    {
      name: 'Koga',
      age: 40,
      gymBadge: 'Soul Badge',
      badgeImage: 'soul.png',
      location: 'Fuchsia City',
      nameColor: '#e070f0',
      borderColor: '#e070f0',
      pokemonTeam: [
        { name: 'Muk', level: 37 },
        { name: 'Weezing', level: 43 }
      ],
      monologue: 'FWAHAHAHAHA! KOGA is my name! The ninja Pokémon master! You can\'t win against my ninja Pokémon!',
      description: 'Koga is a Poison-type specialist and the fifth Gym Leader in Kanto. He is a master ninja who employs underhanded tactics in battle.',
      motto: 'Fwa, ha, ha! Koga strikes from the shadows with POISON!'
    },
    {
      name: 'Sabrina',
      age: 28,
      gymBadge: 'Marsh Badge',
      badgeImage: 'marsh.png',
      location: 'Saffron City',
      nameColor: '#f5c842',
      borderColor: '#f5c842',
      pokemonTeam: [
        { name: 'Kadabra', level: 38 },
        { name: 'Alakazam', level: 43 }
      ],
      monologue: 'I had a vision of your arrival! I foresaw that you would come here.',
      description: 'Sabrina is a Psychic-type specialist and the sixth Gym Leader in Kanto. She possesses powerful psychic abilities she developed as a child.',
      motto: 'My psychic powers have no limits!'
    },
    {
      name: 'Blaine',
      age: 58,
      gymBadge: 'Volcano Badge',
      badgeImage: 'volcano.png',
      location: 'Cinnabar Island',
      nameColor: '#f07040',
      borderColor: '#f07040',
      pokemonTeam: [
        { name: 'Growlithe', level: 42 },
        { name: 'Magmar', level: 47 }
      ],
      monologue: 'Hey, old man! I am the red-hot BLAINE! Do you have the FIRE to challenge me?',
      description: 'Blaine is a Fire-type specialist and the seventh Gym Leader in Kanto. He is a scientist who helped create Mewtwo before retiring to run his gym.',
      motto: 'My fiery Pokémon will incinerate all challengers without mercy!'
    },
    {
      name: 'Giovanni',
      age: 42,
      gymBadge: 'Earth Badge',
      badgeImage: 'earth.png',
      location: 'Viridian City',
      nameColor: '#e84040',
      borderColor: '#e84040',
      pokemonTeam: [
        { name: 'Nidoqueen', level: 45 },
        { name: 'Rhydon', level: 50 }
      ],
      monologue: 'I am Giovanni! I am the last Gym Leader — and the boss of Team Rocket!',
      description: 'Giovanni is a Ground-type specialist, the eighth Gym Leader in Kanto, and the secret leader of Team Rocket. He seeks Pokémon for profit and power.',
      motto: 'The power of EARTH will crush your Pokémon into dust!'
    }
  ];
}