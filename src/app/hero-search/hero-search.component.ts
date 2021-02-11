import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  template:`
    <div id="search-component">
      <h4><label for="search-box">Hero Search</label></h4>

      <input #searchBox id="search-box" (input)="search(searchBox.value)" />

      <ul class="search-result">
        <li *ngFor="let hero of heroes$ | async" >
          <a routerLink="/detail/{{hero.id}}">
            {{hero.name}}
          </a>
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  // RxJSのSubject！Observableのようにsucribe可能、nextメソッドで値のプッシュも可能。
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  // 検索語をobservableストリームにpushする
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // 各キーストロークの後、検索前に300ms待つ
      debounceTime(300),

      // 直前の検索語と同じ場合は無視する
      distinctUntilChanged(),

      // 検索語が変わる度に、新しい検索observableにスイッチする
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }
}
