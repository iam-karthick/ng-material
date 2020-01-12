import { Directive, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
  selector: '.appCardHover'
})
export class CardHoverDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.backgroundColor = "gray";
  }

}
@Directive({
  selector: '.appTextHover'
})
export class HoverText {
  constructor(private el: ElementRef, private renderer: Renderer) {

  }
  @HostListener('mouseenter') onMouseEnter() {
    this.hover(true);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hover(false);
  }

  hover(backgroundColor: boolean) {
    if (backgroundColor) {
      // Mouse enter
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'gray');

    } else {
      // Mouse leave
      this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', 'transparent');

    }
  }
}
