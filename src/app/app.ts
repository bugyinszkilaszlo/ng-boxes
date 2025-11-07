import { Component, signal } from '@angular/core';
import { BoxCard } from './components/box-card/box-card';
import { NewBox } from './components/new-box/new-box';

@Component({
  selector: 'app-root',
  imports: [BoxCard, NewBox],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ng-boxes');
}
