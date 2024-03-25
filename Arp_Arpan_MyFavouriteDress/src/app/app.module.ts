import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentListComponent } from './content-list/content-list.component';
import { ContentTypeFilterPipe } from './content-type-filter.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { MessagesComponent } from './messages/messages.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "../../node_modules/angular-in-memory-web-api";
import { InMemoryDataService } from "../app/services/in-memory-data.service";


@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,    
    ContentTypeFilterPipe,
    HoverAffectDirective,
    MessagesComponent,
    ModifyContentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
      {
      dataEncapsulation: false,
      delay: 1000,
      }),
      
    FormsModule
  ],
  providers: [HttpClientModule,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
