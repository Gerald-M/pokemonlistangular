import { Component, OnInit } from '@angular/core';
import { Router, Params } from '@angular/router';
import { HEROES } from './mock-heroes.component';
import { Hero } from './heroes';
import { HeroService } from '../hero.service';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  hero = Hero;
  

  constructor(
   private routeur: Router, heroService: HeroService) { }

  ngOnInit() {
    
  }

  selectHero(hero:Hero) : void{
    
    let link = ['/heroes', hero.id];
     console.log(hero.id);
     console.log(link);
     this.routeur.navigate(link);
 }
  }
  