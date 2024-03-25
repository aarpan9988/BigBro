import { Component, EventEmitter, Output } from '@angular/core';
import { Content} from '../helper-files/content-interface'
import { DressService } from '../dress.service';
import { InMemoryDataService } from '../services/in-memory-data.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {

  @Output() contentUpdated = new EventEmitter<Content[]>();
  name : string | undefined;
   contentArray: any[] = [];
   contentArrayTemp: any[] = [];
   logContentInfo(id: string, title: string) {
    console.log("Content ID:", id);
    console.log("Content Title:", title);
  }
  typePresent:boolean | undefined;
  inputValue:string='';
  defaultImageUrl:string='https://i.pinimg.com/originals/90/70/58/9070587de0e3227cba0d9a6a880b4682.jpg'; 
   
  
  
  constructor(private service:DressService,private inMemoryService:InMemoryDataService){
  }
    ngOnInit(){
        console.log("service")
  
        
      this .contentArrayTemp.push(this.inMemoryService.createDb());
       this.contentArray=this.contentArrayTemp[0].content
       this.contentUpdated.emit(this.contentArray);
        console.log("DB")
        console.log(this.contentArray)
        console.log(this.contentUpdated)
        
      
    }


    
    search(str:string){
     
      for(let  i=0; i < this.contentArray.length; i++){
        if(this.contentArray[i].title==str)
        {
          this.typePresent=true;
          break;
        }
      
      else if(this.contentArray[i].title!=str)
       this.typePresent=false;
      }
      
    }

    addContentToList(newContentItem: Content): void {
      this.service.addContent(newContentItem)
      .subscribe(newContentFromServer =>
      this.contentArray=[...this.contentArray,newContentFromServer]
      );

          
          console.log("After push");
          console.log(this.contentArray);


      }

      updateContent(updatedContent: Content) {
        const index = this.contentArray.findIndex(c => c.id === updatedContent.id);
        if (index > -1) {
          this.contentArray[index] = updatedContent; // Update content item at the index
        } else {
          console.warn('Content not found with ID:', updatedContent.id);
        }
        return updatedContent;
      }
      updateContentInList(contentItem: Content): void {
        this.service.updateContent(contentItem)
        .subscribe(() =>
        console.log("Content updated successfully")
        );
        }
        

}
