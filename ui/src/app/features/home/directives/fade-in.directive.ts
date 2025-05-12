import { Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appFadeIn]'
})
export class FadeInDirective implements OnInit {
  private el = inject(ElementRef);

  observers: IntersectionObserver | undefined;
  config = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  constructor() {
    this.el.nativeElement.classList.add('fade-in');
  }

  ngOnInit() {
    const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // no longer need to observe once visible
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, this.config);

    observer.observe(this.el.nativeElement);
  }
}
