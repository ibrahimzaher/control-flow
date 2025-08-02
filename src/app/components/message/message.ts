import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  imports: [],
  templateUrl: './message.html',
  styleUrl: './message.css',
})
export class Message {
  isShow: boolean = false;
  animate: boolean = false;
  showMessage(): void {
    this.isShow = true;
    this.animate = true;
  }
  hideMessage(): void {
    this.animate = false;
    setTimeout(() => {
      this.isShow = false;
    }, 500);
  }
}
