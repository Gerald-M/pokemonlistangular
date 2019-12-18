import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heroTypeColor'
})
export class HeroTypeColorPipe implements PipeTransform {

  transform(types:string): string {
   
  let color: string;
 
  switch (types) {
    case 'Feu':
      color = 'red lighten-1';
      break;
    case 'Eau':
      color = 'blue lighten-1';
      break;
    case 'Plante':
      color = 'green lighten-1';
      break;
    case 'Roche':
      color = 'brown lighten-1';
      break;
    case 'Combat':
      color = 'brown lighten-5';
      break;
    case 'Normal':
      color = 'red lighten-5';
      break;
    case 'Dragon':
      color = 'orange lighten-1';
      break;
    case 'Vol':
     color = 'grey lighten-1';
     break;
    case 'Terre':
     color = 'brown lighten-1';
     break;
     case 'Poison':
     color = 'purple lighten-2';
     break;
     case 'Fée':
     color = 'indigo lighten-2';
     break;
     case 'Electrique':
     color = 'yellow lighten-2';
     break;
     case 'Insecte':
     color = 'green lighten-2';
     break;
    
    
    default:
      color = 'grey';
      break;
    }
  
    return 'chip ' + color;


}
}