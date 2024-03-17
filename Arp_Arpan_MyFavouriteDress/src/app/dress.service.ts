import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, of } from 'rxjs';
import { contentDB } from './helper-files/contentDB';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class DressService {

  constructor(private messageService: MessageService) { }

  

  getContent(): Observable<any[]> {
    this.messageService.add("Content array loaded!");

    return of (contentDB);
  }

  getContentById(id: number): Observable<any> {
    this.messageService.add("Content Item at id:" + id)
    return this.getContent().pipe(
      map(contentArray => contentArray.find(content => content.id === id))
    );
  }
}
