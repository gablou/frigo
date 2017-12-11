import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[frgRepeat]'
})
export class FrgRepeatDirective {

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    @Input('frgRepeat') set count(c: number) {
      this.viewContainer.clear();
      for (let i = 0; i < c; i++) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    }
}
