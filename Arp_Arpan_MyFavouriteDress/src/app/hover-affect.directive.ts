import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[HoverAffect]'
})
export class HoverAffectDirective {
  @Input('hoverStyle') hoverStyle: any; // Input property for hover style
  constructor(private elementRef: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.applyStyle(this.hoverStyle);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.removeStyle();
  }
  private applyStyle(style: any) {
    for (const property in style) {
      // if (style.hasOwnProperty(property)) { 
        // const property = Object.keys(style)[0];
        this.elementRef.nativeElement.style[property] = style[property];
      // }
    }
  }
  private removeStyle() {
    this.elementRef.nativeElement.style.textDecoration = 'none';
    this.elementRef.nativeElement.style.color = 'black';
    this.elementRef.nativeElement.style.fontWeight = 'normal';
    this.elementRef.nativeElement.style.border = 'none';
  }
}