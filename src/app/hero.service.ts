import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHero(id: string | null): Observable<Hero | undefined> {
    this.messageService.add(`HeroService: fetch hero id=${id}`);
    return of(HEROES.find((hero) => hero.id.toString() === id));
  }
  constructor(
    private messageService: MessageService,
   ) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
