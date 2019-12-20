import { InMemoryDbService } from 'angular-in-memory-web-api';
import { HEROES } from './heroes/mock-heroes.component';


export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		let heroes = HEROES;
		return { heroes };
	}
}