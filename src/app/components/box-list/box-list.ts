import { Component, inject } from '@angular/core';
import { BoxCard } from '../box-card/box-card';
import { BoxService } from '../../services/box.service';

@Component({
  selector: 'app-box-list',
  imports: [BoxCard],
  templateUrl: './box-list.html',
  styleUrl: './box-list.css',
})
export class BoxList {
  private boxService = inject(BoxService);
  readonly boxes = this.boxService.boxes;
}
