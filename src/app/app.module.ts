import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroTypeColorPipe } from './hero-type-color.pipe';
import { HeroBorderCardDirective } from './hero-border-card.directive';
import { HeroSkillColorPipe } from './hero-skill-color.pipe';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroCardTypeBgPipe } from './hero-card-type-bg.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroTypeColorPipe,
    HeroBorderCardDirective,
    HeroSkillColorPipe,
    HeroDetailComponent,
    HeroCardTypeBgPipe,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
