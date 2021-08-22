import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') highlight!: boolean;
  constructor(private elem:ElementRef) {
  }

  ngOnInit() {
    if (this.highlight) {
      this.elem.nativeElement.style.backgroundColor='#86C232';
    }
  }
}
