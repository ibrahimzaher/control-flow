import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  Input,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Alert } from '../alert/alert';
import { Message } from '../message/message';
import { Child } from '../child/child';

@Component({
  selector: 'app-home',
  imports: [Alert, Message, Child],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  @ViewChild('element') ele!: ElementRef;
  @ViewChild('element') element!: ElementRef;
  @ViewChild(Message) message!: Message;

  constructor(private chd: ChangeDetectorRef, private r2: Renderer2) {}

  // constructor(private eleRef: ElementRef) {
  //   console.log(this.eleRef.nativeElement);
  //   this.eleRef.nativeElement.classList.add('text-center', 'bg-danger', 'w-50');
  // }
  // @HostBinding('class.text-center') textCenter = true;
  // @HostBinding('class.bg-danger') bgDanger = true;
  // @HostBinding('class.w-50') w50 = true;
  // ngAfterViewInit(): void {
  //   this.ele.nativeElement.classList.add(
  //     'bg-dark',
  //     'text-white',
  //     'px-4',
  //     'py-2'
  //   );
  // }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.message.showMessage();
    // this.chd.detectChanges();
  }
  showMessage() {
    this.message.showMessage();
  }
  hideMessage() {
    this.message.hideMessage();
  }
  test(ele: HTMLParagraphElement): void {
    ele.classList.remove('bg-dark');
    ele.classList.add('bg-danger');
    console.log(this.element.nativeElement);
  }
}
