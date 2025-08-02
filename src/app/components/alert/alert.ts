import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert',
  imports: [NgIf],
  templateUrl: './alert.html',
  styleUrl: './alert.css',
})
export class Alert {
  @Input({
    required: true,
    transform: (value: string) => value.toUpperCase(),
    alias: 'message',
  })
  messageText!: string;
  @Input() backgroundColor: string = 'red';
  show: boolean = true;
  hideAlertt() {
    this.show = false;
  }
}
