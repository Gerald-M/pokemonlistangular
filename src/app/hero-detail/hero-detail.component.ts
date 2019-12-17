import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HEROES } from '../heroes/mock-heroes.component';
import { Hero } from '../heroes/heroes';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  heroes : Hero[];
  hero:Hero;

  constructor(
    private routeur: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    this.heroes = HEROES;

    let id = +this.route.snapshot.paramMap.get('id');
		for (let i = 0; i < this.heroes.length; i++) {
			if (this.heroes[i].id == id) {
				this.hero = this.heroes[i];
			}
		}
  }
  
  goBack(): void {
    this.routeur.navigate(['/heroes']);
  }
    
  }

  



