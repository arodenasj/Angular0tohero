import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input() tooltipText = '';
  private tooltip: HTMLElement | null = null;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.showTooltip();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeTooltip();
  }

  private showTooltip() {
    this.tooltip = document.createElement('div');
    this.tooltip.className = 'tooltip';
    this.tooltip.textContent = this.tooltipText;
    document.body.appendChild(this.tooltip);

    const elementRect = this.el.nativeElement.getBoundingClientRect();
    this.tooltip.style.top = `${elementRect.bottom + 5}px`;
    this.tooltip.style.left = `${elementRect.left}px`;
  }

  private removeTooltip() {
    if (this.tooltip) {
      document.body.removeChild(this.tooltip);
      this.tooltip = null;
    }
  }
}
