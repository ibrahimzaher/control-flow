import { Component, Input } from '@angular/core';
import { IProduct } from '../../interfaces/i-product';

@Component({
  selector: 'custom-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input({ required: true }) product!: IProduct;
}
