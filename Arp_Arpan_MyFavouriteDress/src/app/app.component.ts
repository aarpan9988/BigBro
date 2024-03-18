import { Component, OnInit } from '@angular/core';

import { DressService } from './dress.service';
import { Content } from './helper-files/content-interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  topContentItem: Content; 

  constructor(private service: DressService) { }

  ngOnInit(): void {
  
    this.service.getContentById(6).subscribe((res: any) => {
      this.topContentItem = res;
    });
  }
}
