import { Component } from '@angular/core';
import { BoxList } from './components/box-list/box-list';
import { NewBox } from './components/new-box/new-box';

@Component({
  selector: 'app-root',
  imports: [BoxList, NewBox],
  templateUrl: './app.html',
})
export class App {}
