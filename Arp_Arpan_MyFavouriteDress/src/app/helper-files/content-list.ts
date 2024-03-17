// content-list.ts
import { Content } from './content-interface';

export class ContentList {
  private contentArray: Content[] = [];

  constructor() {}

  get content(): Content[] {
    return this.contentArray;
  }

  add(content: Content): void {
    this.contentArray.push(content);
  }

  count(): number {
    return this.contentArray.length;
  }

  getContentAtIndex(index: number): string {
    const item = this.contentArray[index];
    return `<div>
      <p>Title: ${item.title}</p>
      <p>Description: ${item.description}</p>
      <p>Creator: ${item.creator}</p>
      <p>Image: <img src="${item.imgURL}" alt="Image"></p>
      <p>Type: ${item.type}</p>
    </div>`;
  }
}
export { Content };

