import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  @ContentChild('hel') element!: ElementRef;
  @Input() hello!: string;
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes['hello']);

    console.log('onChange', this.hello);
  }
  click() {
    console.log(this.element.nativeElement);
  }
}
