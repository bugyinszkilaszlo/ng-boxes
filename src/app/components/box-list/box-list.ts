import { Component } from '@angular/core';
import { BoxCard } from '../box-card/box-card';
import { Box } from '../../model/box.type';

@Component({
  selector: 'app-box-list',
  imports: [BoxCard],
  templateUrl: './box-list.html',
  styleUrl: './box-list.css',
})
export class BoxList {
  boxList: Box[] = [
    {
      id: 1,
      name: 'First Box',
      items: [
        { id: 1, name: 'First', image: `https://picsum.photos/seed/box1-1/400/300` },
        { id: 2, name: 'Second', image: 'https://picsum.photos/seed/box1-2/400/300' },
        { id: 3, name: 'Third', image: 'https://picsum.photos/seed/box1-3/400/300' },
        { id: 4, name: 'Fourth', image: 'https://picsum.photos/seed/box1-4/400/300' },
        { id: 5, name: 'Fifth', image: 'https://picsum.photos/seed/box1-5/400/300' },
      ],
    },
    {
      id: 2,
      name: 'Second Box',
      items: [
        { id: 4, name: 'Fourth', image: 'https://picsum.photos/seed/box2-1/400/300' },
        { id: 5, name: 'Fifth', image: 'https://picsum.photos/seed/box2-2/400/300' },
      ],
    },
  ];
}
