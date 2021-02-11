import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // 同期処理
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  
  // 非同期処理
  getHeroes(): Observable<Hero[]> {
    // of(HEROES)はモックヒーローの配列を出力するObservable<Hero[]>を返す
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
