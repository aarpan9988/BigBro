import { Component } from '@angular/core';
// import { ContentList } from '../helper-files/content-list';
import { Content} from '../helper-files/content-interface'
import { DressService } from '../dress.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent {

  name : string | undefined;
   contentArray: Content[] = [];
   logContentInfo(id: string, title: string) {
    console.log("Content ID:", id);
    console.log("Content Title:", title);
  }
  typePresent:boolean | undefined;
  inputValue:string='';
  defaultImageUrl:string='https://i.pinimg.com/originals/90/70/58/9070587de0e3227cba0d9a6a880b4682.jpg'; 
  
  
  constructor(private service:DressService){
  // this.contentArray.push(
    
  //     { 
  //       id: 1, 
  //       title: 'Dress', 
  //       description: 'Description for Content 1', 
  //       creator: 'Creator 1', 
  //       imgURL: 'https://th.bing.com/th/id/R.4fc853a0ba16699313a93391c7416f4b?rik=uHMVensdv7JncA&riu=http%3a%2f%2fdzasv7x7a867v.cloudfront.net%2fproduct_photos%2f46820830%2fQQ_E5_9B_BE_E7_89_8720161226102324_original.jpg&ehk=%2bRgXk1t0Bx%2baR%2fRwo%2b9e21H%2fcovKeGvnFMG8RmOAOSU%3d&risl=&pid=ImgRaw&r=0', 
  //       type: '', 
  //       tags: ['Tag1', 'Tag2'] 
  //     },
  //     { 
  //       id: 2, 
  //       title: 'Bodycon', 
  //       description: 'Description for Content 2', 
  //       creator: 'Creator 2', 
  //       imgURL: 'https://i.pinimg.com/736x/44/2e/d8/442ed81d01e50c0483232da0701f0fcb.jpg', 
  //       type: '', 
  //       tags: [] 
  //     },
  //     { 
  //       id: 3, 
  //       title: 'Tops', 
  //       description: 'Description for Content 3', 
  //       creator: 'Creator 3', 
  //       imgURL: 'https://i.pinimg.com/originals/05/ac/36/05ac36475d2851baf8989b91a53f7b1b.jpg', 
  //       type: 'Casual', 
  //       tags: ['Tag5', 'Tag6'] 
  //     },
  //     { 
  //       id: 4, 
  //       title: 'Lehanga', 
  //       description: 'Description for Content 3', 
  //       creator: 'Creator 3', 
  //       imgURL: 'https://www.aishwaryadesignstudio.com/content/images/thumbs/0119725_aesthetic-black-and-orange-colored-designer-lehenga-choli.jpeg', 
  //       type: 'Indian', 
  //       tags: ['Tag5', 'Tag6'] 
  //     },
  //       { 
  //       id: 5, 
  //       title: 'SweatShirt', 
  //       description: 'Description for Content 3', 
  //       creator: 'Creator 3', 
  //       imgURL: '', 
  //       type: 'Casual', 
  //       tags: ['Tag5', 'Tag6'] 
  //     },
  //     { 
  //       id: 6, 
  //       title: 'Dress', 
  //       description: 'Description for Content 3', 
  //       creator: 'Creator 3', 
  //       imgURL: 'https://i.pinimg.com/originals/b6/6e/d3/b66ed34831b228acf942ddb1756f87f8.jpg', 
  //       type: '', 
  //       tags: ['Tag5', 'Tag6'] 
  //     },
  //     { 
  //       id: 7, 
  //       title: 'Saree', 
  //       description: 'Description for Content 7', 
  //       creator: 'Creator 7', 
  //       imgURL: 'https://anavila.com/wp-content/uploads/alia-b.jpg', 
  //       type: 'Indian', 
  //       tags: ['Tag5', 'Tag6'] 
  //     },
  //     {
  //       id: 8, 
  //       title: 'Suit', 
  //       description: 'Description for Content 8', 
  //       creator: 'Creator 8', 
  //       imgURL: 'https://i.pinimg.com/736x/8f/38/83/8f3883f2326f4f85eb3d1bf783d7b69f.jpg', 
  //       type: 'Indian', 
  //       tags: ['Tag5', 'Tag6'] 
        

  //     },
  //     { 
  //       id: 9, 
  //       title: 'SweatShirt', 
  //       description: 'Description for Content 3', 
  //       creator: 'Creator 3', 
  //       imgURL: 'https://i.pinimg.com/originals/39/9a/1f/399a1faa6127dede8bdeb997c097c729.jpg', 
  //       type: 'Casual', 
  //       tags: ['Tag5', 'Tag6'] 
  //     }
  //    );
 
   
    }
    ngOnInit(){
        console.log("service")
  
        this.service.getContent().subscribe(res=>{
          console.log(res)
          this.contentArray.push(...res)
        })

        this.service.getContentById(2).subscribe(res=>{
          console.log(res)
        })
      
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

}
