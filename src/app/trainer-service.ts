import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private registry = signal([
    { 
      name: 'Ash Ketchum', 
      team: ['Pikachu', 'Charizard'], 
      items: ['Light Ball', 'Charizardite Y'] 
    },
    { 
      name: 'Misty', 
      team: ['Starmie', 'Psyduck', 'Gyarados'], 
      items: ['Mystic Water', 'None', 'Gyaradosite'] 
    },
    {
      name: 'Brock',
      team: ['Onix', 'Geodude', 'Steelix'],
      items: ['Hard Stone', 'Everstone', 'Metal Coat']
    },
    {
      name: 'Gary Oak',
      team: ['Blastoise', 'Arcanine', 'Alakazam', 'Nidoking'],
      items: ['Blastoisinite', 'Charcoal', 'Twisted Spoon', 'Poison Barb']
    },
    {
      name: 'Jessie',
      team: ['Arbok', 'Wobbuffet', 'Seviper'],
      items: ['Poison Barb', 'Lax Incense', 'Black Sludge']
    }
  ]);

  trainers = this.registry.asReadonly();
}