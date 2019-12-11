import { Component, OnInit } from '@angular/core';
import { Hero } from './heroes';
import { HEROES } from './mock-heroes.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

    heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
