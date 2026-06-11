import { Injectable, signal } from '@angular/core';
import { GymLeader } from '../gym-leader/gym-leader';

@Injectable({
  providedIn: 'root'
})
export class HoennGymLeadersService {

  private readonly _gymLeaders = signal<GymLeader[]>([
    {
      name: 'Roxanne',
      age: 15,
      gymBadge: 'Stone Badge',
      badgeImage: 'stone.png',
      location: 'Rustboro City',
      nameColor: '#c8a87a',
      borderColor: '#c8a87a',
      pokemonTeam: [
        { name: 'Geodude', level: 12 },
        { name: 'Nosepass', level: 15 }
      ],
      monologue: 'I became a Gym Leader so I could apply what I learned. I shall demonstrate what I know!',
      description: 'Roxanne is a Rock-type specialist and the first Gym Leader in Hoenn. She is a student and teacher at the Pokémon Trainer\'s School in Rustboro City.',
      motto: 'Using the power of Rock-type Pokémon, I will show you the fruits of my studies!'
    },
    {
      name: 'Brawly',
      age: 20,
      gymBadge: 'Knuckle Badge',
      badgeImage: 'knuckle.png',
      location: 'Dewford Town',
      nameColor: '#e09060',
      borderColor: '#e09060',
      pokemonTeam: [
        { name: 'Machop', level: 17 },
        { name: 'Makuhita', level: 18 }
      ],
      monologue: 'Hm-hm-hm... I surf all day, and then do Pokémon training. I just got the urge to up and go!',
      description: 'Brawly is a Fighting-type specialist and the second Gym Leader in Hoenn. A free-spirited surfer, he trains his Pokémon with a go-with-the-flow attitude that still proves devastatingly effective.',
      motto: 'A big wave and fighting spirit — my Pokémon will send you crashing!'
    },
    {
      name: 'Wattson',
      age: 60,
      gymBadge: 'Dynamo Badge',
      badgeImage: 'dynamo.png',
      location: 'Mauville City',
      nameColor: '#f5e020',
      borderColor: '#f5e020',
      pokemonTeam: [
        { name: 'Voltorb', level: 22 },
        { name: 'Manectric', level: 24 }
      ],
      monologue: 'Wahahaha! Now, that is a sight! You, challenger — you\'re truly electrifying!',
      description: 'Wattson is an Electric-type specialist and the third Gym Leader in Hoenn. A jolly, energetic elder, he built much of Mauville City\'s infrastructure and loves a good laugh.',
      motto: 'Wahaha! My electric Pokémon will charge you up — or knock you out!'
    },
    {
      name: 'Flannery',
      age: 18,
      gymBadge: 'Heat Badge',
      badgeImage: 'heat.png',
      location: 'Lavaridge Town',
      nameColor: '#f06030',
      borderColor: '#f06030',
      pokemonTeam: [
        { name: 'Slugma', level: 26 },
        { name: 'Torkoal', level: 29 }
      ],
      monologue: 'I\'m Flannery! I only recently became a Gym Leader. I\'m still not sure I\'m doing things right!',
      description: 'Flannery is a Fire-type specialist and the fourth Gym Leader in Hoenn. She is the granddaughter of a former Elite Four member and is still finding her confidence as a new leader.',
      motto: 'My searing hot Fire Pokémon will never lose to any challenger!'
    },
    {
      name: 'Norman',
      age: 38,
      gymBadge: 'Balance Badge',
      badgeImage: 'balance.png',
      location: 'Petalburg City',
      nameColor: '#d0d0d0',
      borderColor: '#d0d0d0',
      pokemonTeam: [
        { name: 'Spinda', level: 27 },
        { name: 'Slaking', level: 31 }
      ],
      monologue: 'If you are a Trainer, you must be strong, yet kind. That is what I have learned from raising Pokémon.',
      description: 'Norman is a Normal-type specialist and the fifth Gym Leader in Hoenn. He is also the player character\'s father, a composed and disciplined man who moved to Hoenn to pursue his dream of being a Gym Leader.',
      motto: 'Being strong and having balance in all things — that is the way of Normal Pokémon!'
    },
    {
      name: 'Winona',
      age: 25,
      gymBadge: 'Feather Badge',
      badgeImage: 'feather.png',
      location: 'Fortree City',
      nameColor: '#60b8f0',
      borderColor: '#60b8f0',
      pokemonTeam: [
        { name: 'Swellow', level: 31 },
        { name: 'Altaria', level: 35 }
      ],
      monologue: 'I have been given the honor of battling you. I, who have soared the skies with bird Pokémon!',
      description: 'Winona is a Flying-type specialist and the sixth Gym Leader in Hoenn. She has trained relentlessly to achieve perfect harmony with Flying-type Pokémon and battles with graceful elegance.',
      motto: 'My Flying Pokémon and I are one — we will dance through any battle!'
    },
    {
      name: 'Tate & Liza',
      age: 13,
      gymBadge: 'Mind Badge',
      badgeImage: 'mind.png',
      location: 'Mossdeep City',
      nameColor: '#c090f8',
      borderColor: '#c090f8',
      pokemonTeam: [
        { name: 'Lunatone', level: 42 },
        { name: 'Solrock', level: 42 }
      ],
      monologue: 'We don\'t need talk... We can sense what the other is thinking — our bond is perfect!',
      description: 'Tate and Liza are twin Psychic-type specialists and the seventh Gym Leaders of Hoenn. They share an unspoken psychic link and battle in perfect synchronization with their complementary Pokémon.',
      motto: 'Our twin hearts beat as one — no mind can match our combined psychic force!'
    },
    {
      name: 'Juan',
      age: 70,
      gymBadge: 'Rain Badge',
      badgeImage: 'rain.png',
      location: 'Sootopolis City',
      nameColor: '#40c8f8',
      borderColor: '#40c8f8',
      pokemonTeam: [
        { name: 'Luvdisc', level: 41 },
        { name: 'Kingdra', level: 46 }
      ],
      monologue: 'Ahahaha! Now I shall show you my artistry. I shall use my Pokémon to paint a picture of beauty!',
      description: 'Juan is a Water-type specialist and the eighth Gym Leader in Hoenn. A former Champion of Hoenn, he is a refined and theatrical man who treats Pokémon battles as a form of elegant art.',
      motto: 'The flowing beauty of Water Pokémon will overwhelm you like a crashing wave!'
    }
  ]);

  get gymLeaders() {
    return this._gymLeaders.asReadonly();
  }
}
