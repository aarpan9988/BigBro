import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map, of } from 'rxjs';
import { contentDB } from './helper-files/contentDB';
import { MessageService } from './message.service';
import { InMemoryDbService } from "../../node_modules/angular-in-memory-web-api";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Content } from './helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class DressService {

  constructor(private messageService: MessageService,private http: HttpClient) { }

  

  getContent(): Observable<any[]> {
    this.messageService.add("Content array loaded!");

    return of (contentDB);
  }
  getContentData() : Observable<Content[]>{
    return this.http.get<Content[]>("api/content");
    }
    

  getContentById(id: number): Observable<any> {
    this.messageService.add("Content Item at id:" + id)
    return this.getContent().pipe(
      map(contentArray => contentArray.find(content => content.id === id))
    );    
  }
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
    };

    addContent(newContentItem: Content): Observable<Content>{
      return this.http.post<Content>("api/content",
      newContentItem, this.httpOptions);
      }

      updateContent(contentItem: Content): Observable<any>{
        return this.http.put("api/content", contentItem,
        this.httpOptions);
        }
        
  
}
