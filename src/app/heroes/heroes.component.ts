import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  template: `
  <h2>My Heroes</h2>
  <div *ngIf="selectedHero">
    <h2>{{selectedHero.name | uppercase}} Details</h2>
    <div><span>id: </span>{{selectedHero.id}}</div>
    <div>
      <label>name:
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </label>
    </div>
  </div>
  <ul class="heroes">
    <li *ngFor="let hero of heroes"
      [class.selected]="hero === selectedHero"
      (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  `,
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
