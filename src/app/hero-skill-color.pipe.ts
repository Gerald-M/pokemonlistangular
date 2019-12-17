import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroSkillColor'
})
export class HeroSkillColorPipe implements PipeTransform {

  transform(skill:number): string {

    let style:string;

    switch(true) {
      case (skill < 60):
        style = 'D';
        break;
      case (skill >= 60 && skill < 70):
        style = 'C';
        break;
      case (skill >= 70 && skill < 80):
        style = 'B';
        break;
      case (skill >= 80 && skill < 90):
        style = 'A';
        break;
      case (skill >= 90 && skill < 100):
        style = 'S';
        break;
      default:
      style = 'D';
      break;
      }
    
      return 'Classe ' + style;
   
 }

}
