import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})

export class ContentCardComponent {
  @Input() item: Content;
  defaultImageUrl:string='https://i.pinimg.com/originals/90/70/58/9070587de0e3227cba0d9a6a880b4682.jpg'; 
}
