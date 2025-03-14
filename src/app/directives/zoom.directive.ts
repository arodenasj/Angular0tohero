import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appZoom]',
  standalone: true
})
export class ZoomDirective {
  @Input() scale = '1.1';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.zoom(this.scale);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.zoom('1');
  }

  private zoom(scale: string) {
    this.el.nativeElement.style.transition = 'transform 0.2s ease';
    this.el.nativeElement.style.transform = `scale(${scale})`;
  }
}
