import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content} from '../helper-files/content-interface'
import { contentDB } from '../helper-files/contentDB';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements
InMemoryDbService {

  constructor() { }
  createDb():any {
    // setting it to the value of our array of content
    const content : any[] = contentDB;
    return {content};
    }

    getId(content: Content[]): number {
      let id=content.length > 0 ? Math.max(...content.map(c =>
        c.id)) + 1 : 2000;
      return id;
      }

      
}
