import { Directive, ElementRef, OnInit, OnDestroy, Input } from '@angular/core';

@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class Reveal implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const element = this.el.nativeElement as HTMLElement;
    element.style.opacity = '0';
    element.style.transform = 'translateY(32px)';
    element.style.transition = `opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${this.revealDelay}ms, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${this.revealDelay}ms`;

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            this.observer.unobserve(element);
          }
        });
      },
      { threshold: 0.12 }
    );

    this.observer.observe(element);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}