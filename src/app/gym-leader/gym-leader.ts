import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


type InfoTab = 'monologue' | 'description' | 'motto';
export interface Pokemon {
  name: string;
  level: number;
}

export interface GymLeader {
  name: string;
  age: number;
  location: string;
  pokemonTeam: Pokemon[];
  gymBadge: string;
  badgeImage: string;
  nameColor: string;
  borderColor: string;
  monologue: string;
  description: string;
  motto: string;
}
@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gym-leader.html',
  styleUrls: ['./gym-leader.css']
})
export class LeaderInfoComponent {
  @Input() name: string = '';
  @Input() age: number = 0;
  @Input() location: string = '';
  @Input() pokemonTeam: Pokemon[] = [];
  @Input() gymBadge: string = '';
  @Input() badgeImage: string = '';
  @Input() nameColor: string = '#ffffff';
  @Input() borderColor: string = '#444444';
  @Input() monologue: string = '';
  @Input() description: string = '';
  @Input() motto: string = '';

  activeTab: InfoTab | null = null;

  toggleTab(tab: InfoTab): void {
    this.activeTab = this.activeTab === tab ? null : tab;
  }

  onImgError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }

  get activeContent(): string {
    if (this.activeTab === 'monologue') return this.monologue;
    if (this.activeTab === 'description') return this.description;
    if (this.activeTab === 'motto') return this.motto;
    return '';
  }
}