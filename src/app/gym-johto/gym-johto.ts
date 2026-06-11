import { Component } from '@angular/core';
import { LeaderInfoComponent,GymLeader} from '../gym-leader/gym-leader';


@Component({
  selector: 'app-johto-region',
  standalone: true,
  imports: [LeaderInfoComponent],
  templateUrl: './gym-johto.html',
  styleUrls: ['./gym-johto.css']
})
export class JohtoRegionComponent {
  gymLeaders: GymLeader[] = [
    {
      name: 'Falkner',
      age: 14,
      gymBadge: 'Zephyr Badge',
      badgeImage: 'zephy.png',
      location: 'Violet City',
      nameColor: '#5bc8f5',
      borderColor: '#5bc8f5',
      pokemonTeam: [
        { name: 'Pidgey', level: 7 },
        { name: 'Pidgeotto', level: 9 }
      ],
      monologue: 'I\'m FALKNER! The Violet City Pokémon Gym Leader! People say you can\'t beat flying Pokémon. I\'ll show them they\'re wrong!',
      description: 'Falkner specializes in Flying-type Pokémon and is the first Gym Leader in Johto. He inherited the gym from his father and takes great pride in the noble flying Pokémon.',
      motto: 'Only the power of birds can truly rule the sky!'
    },
    {
      name: 'Bugsy',
      age: 12,
      gymBadge: 'Hive Badge',
      badgeImage: 'hive.png',
      location: 'Azalea Town',
      nameColor: '#78e86e',
      borderColor: '#78e86e',
      pokemonTeam: [
        { name: 'Metapod', level: 14 },
        { name: 'Scyther', level: 16 }
      ],
      monologue: 'I\'m BUGSY! I never lose when it comes to Bug-type Pokémon! My research is paying off!',
      description: 'Bugsy is a Bug-type specialist and the second Gym Leader in Johto. He is a passionate researcher who studies Bug Pokémon extensively.',
      motto: 'Research is the secret to my strength — Bug Pokémon are the best!'
    },
    {
      name: 'Whitney',
      age: 18,
      gymBadge: 'Plain Badge',
      badgeImage: 'plain.png',
      location: 'Goldenrod City',
      nameColor: '#f5a0c0',
      borderColor: '#f5a0c0',
      pokemonTeam: [
        { name: 'Clefairy', level: 18 },
        { name: 'Miltank', level: 20 }
      ],
      monologue: 'La la la... Hmm? Oh, a Pokémon battle? Sure, I\'ll take you on! I\'ll show you how to fight cute-style!',
      description: 'Whitney is a Normal-type specialist and the third Gym Leader in Johto. She is a very popular Trainer in Goldenrod City who is famous for her adorable but tough Pokémon.',
      motto: 'My cute Pokémon will overwhelm you — don\'t underestimate Miltank!'
    },
    {
      name: 'Morty',
      age: 26,
      gymBadge: 'Fog Badge',
      badgeImage: 'fog.png',
      location: 'Ecruteak City',
      nameColor: '#c080f0',
      borderColor: '#c080f0',
      pokemonTeam: [
        { name: 'Gastly', level: 21 },
        { name: 'Gengar', level: 25 }
      ],
      monologue: 'I have trained here for many years to see the world that others cannot. I have polished my skills and can now see what others cannot.',
      description: 'Morty is a Ghost-type specialist and the fourth Gym Leader in Johto. He trains in Ecruteak City and has the ability to see a vision of the legendary Ho-Oh.',
      motto: 'Through the veil of fog, I see the legendary Pokémon — and your defeat!'
    },
    {
      name: 'Chuck',
      age: 35,
      gymBadge: 'Storm Badge',
      badgeImage: 'storm.png',
      location: 'Cianwood City',
      nameColor: '#f5c842',
      borderColor: '#f5c842',
      pokemonTeam: [
        { name: 'Primeape', level: 27 },
        { name: 'Poliwrath', level: 31 }
      ],
      monologue: 'WAHAHAHA! My Pokémon have trained under this waterfall for many years! They\'re very tough!',
      description: 'Chuck is a Fighting-type specialist and the fifth Gym Leader in Johto. He is known for his boisterous personality and trains his Pokémon relentlessly under a waterfall.',
      motto: 'True strength is forged through water and sweat — nothing can match it!'
    },
    {
      name: 'Jasmine',
      age: 20,
      gymBadge: 'Mineral Badge',
      badgeImage: 'mineral.png',
      location: 'Olivine City',
      nameColor: '#b8b8d0',
      borderColor: '#b8b8d0',
      pokemonTeam: [
        { name: 'Magnemite', level: 30 },
        { name: 'Steelix', level: 35 }
      ],
      monologue: 'I\'m JASMINE. I\'m the GYM LEADER here, in OLIVINE CITY. I use STEEL-type Pokémon...',
      description: 'Jasmine is a Steel-type specialist and the sixth Gym Leader in Johto. She is known for her shy and gentle personality, and spent time nursing a sick Ampharos before returning to battle.',
      motto: 'Steel is the hardest material — it will never bend to your will!'
    },
    {
      name: 'Pryce',
      age: 70,
      gymBadge: 'Glacier Badge',
      badgeImage: 'glacier.png',
      location: 'Mahogany Town',
      nameColor: '#80d8f0',
      borderColor: '#80d8f0',
      pokemonTeam: [
        { name: 'Seel', level: 27 },
        { name: 'Dewgong', level: 29 }
      ],
      monologue: 'I have seen and suffered much in my life. But I have also learned that Pokémon can truly care for their Trainer.',
      description: 'Pryce is an Ice-type specialist and the seventh Gym Leader in Johto. An elderly trainer with decades of experience, he was once distant toward his Pokémon but has grown to deeply care for them.',
      motto: 'Ice endures all — my Pokémon will outlast any challenger!'
    },
    {
      name: 'Clair',
      age: 22,
      gymBadge: 'Rising Badge',
      badgeImage: 'rising.png',
      location: 'Blackthorn City',
      nameColor: '#9090e0',
      borderColor: '#9090e0',
      pokemonTeam: [
        { name: 'Dragonair', level: 37 },
        { name: 'Kingdra', level: 40 }
      ],
      monologue: 'I am CLAIR. The world\'s best DRAGON-type master! Even my cousin LANCE of the Elite Four recognizes my skill!',
      description: 'Clair is a Dragon-type specialist and the eighth Gym Leader in Johto. She is a proud and strong-willed Trainer who is the cousin of Elite Four member Lance.',
      motto: 'My Dragon Pokémon are as pure as crystals — and just as unbreakable!'
    }
  ];
}