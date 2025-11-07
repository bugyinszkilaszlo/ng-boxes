import { Component, input } from '@angular/core';
import { Box } from '../../model/box.type';

@Component({
  selector: 'app-box-card',
  imports: [],
  templateUrl: './box-card.html',
  styleUrl: './box-card.css',
})
export class BoxCard {
  box = input.required<Box>();
}
