import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // 同期処理
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  
  // 非同期処理
  getHeroes(): Observable<Hero[]> {
    // of(HEROES)はモックヒーローの配列を出力するObservable<Hero[]>を返す
    return of(HEROES);
  }
}
