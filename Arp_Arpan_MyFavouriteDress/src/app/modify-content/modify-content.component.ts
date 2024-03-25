import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { DressService } from '../dress.service';
import { InMemoryDataService } from '../services/in-memory-data.service';
import { ContentListComponent } from '../content-list/content-list.component';
import { MessageService } from '../message.service';


@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss'
})
export class ModifyContentComponent implements OnInit {
  newContent: Content = {} as Content;
  isUpdating = false;
  contentArray: any[] = [];
  contentArrayTemp: any[] = [];

  constructor(private contentService: DressService,
    private inMemoryService:InMemoryDataService,private contentList:ContentListComponent
    ,private messageService:MessageService) { }

    ngOnInit() {
      console.log("inside ng of modify")
      // this.contentList.contentUpdated.subscribe(updatedContent => {
       
      //   console.log('Content updated by Output@:', updatedContent);
      //   this.contentArray=updatedContent;
      // });
    }

  addContent() 
  {
    console.log("newwwww")
    console.log(this.newContent)


    if (this.newContent.id && this.isUpdating) {
      // Update existing content
     
      this.contentService.updateContent( this.newContent)
        .subscribe(updatedContent => {
         this.contentList.updateContent(this.newContent);
          console.log('Content updated:', updatedContent);
          this.messageService.add("content is successfully updated");
          this.resetForm(); // Optional: Clear form after update
        },
        error => {
          console.error('Error updating content:', error);
        });
    } else {
      // Add new content (ignore id field)
        this .contentArrayTemp.push(this.inMemoryService.createDb());
          this.contentArray=this.contentArrayTemp[0].content;
          this.newContent.id = this.inMemoryService.getId(this.contentArray);
          console.log("this.newContent",this.newContent)
          console.log("Before");
          this.contentList.addContentToList(this.newContent);
          this.messageService.add("content is successfully Added");

      
     
    }
  }


  resetForm() {
    this.newContent = {} as Content;
    this.isUpdating = false;
  }

  checkForUpdate(id: number) {
    if (id) {
      this.contentService.getContentById(id)
        .subscribe(content => {
          if (content) {
            this.newContent = content; // Populate form with existing data
            this.isUpdating = true; // Set update mode
          } else {
            console.warn('Content not found with ID:', id);
          }
        },
        error => {
          console.error('Error fetching content:', error);
        });
    } else {
      this.isUpdating = false; // Reset update mode if id is empty
    }
  }
}