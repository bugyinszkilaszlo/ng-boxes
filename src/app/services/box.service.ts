import { Injectable, signal } from '@angular/core';
import { Box } from '../model/box.type';

const STORAGE_KEY = 'boxes';

@Injectable({
  providedIn: 'root',
})
export class BoxService {
  private boxesSignal = signal<Box[]>([]);
  readonly boxes = this.boxesSignal.asReadonly();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      this.boxesSignal.set(JSON.parse(stored));
    } else {
      // Initialize with default data if storage is empty
      this.boxesSignal.set([
        {
          id: 1,
          name: 'First Box',
          items: [
            { id: 1, name: 'First', image: 'https://picsum.photos/seed/box1-1/400/300' },
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
      ]);
      this.saveToStorage();
    }
  }

  private saveToStorage(): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.boxesSignal()));
  }

  addBox(box: Box): void {
    this.boxesSignal.update((boxes) => [...boxes, box]);
    this.saveToStorage();
  }

  removeBox(id: number): void {
    this.boxesSignal.update((boxes) => boxes.filter((box) => box.id !== id));
    this.saveToStorage();
  }

  updateBox(updatedBox: Box): void {
    this.boxesSignal.update((boxes) =>
      boxes.map((box) => (box.id === updatedBox.id ? updatedBox : box))
    );
    this.saveToStorage();
  }
}
