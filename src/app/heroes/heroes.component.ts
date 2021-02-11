import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  template: `
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes">
      <a routerLink="/detail/{{hero.id}}">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </a>
      <button class="delete" title="delete hero"
      (click)="delete(hero)">x</button>
    </li>
  </ul>
  <div>
    <label>Hero name:
      <input #heroName />
    </label>
    <!-- (click) 入力値をadd()に渡したあと、入力をクリアする -->
    <button (click)="add(heroName.value); heroName.value=''">
      add
    </button>
  </div>
  `,
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
    // 上記、subscribeを記載しないと発火しない！！
  }
}
