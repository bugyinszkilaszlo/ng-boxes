import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxList } from './box-list';

describe('BoxList', () => {
  let component: BoxList;
  let fixture: ComponentFixture<BoxList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
