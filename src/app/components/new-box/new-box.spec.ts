import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBox } from './new-box';

describe('NewBox', () => {
  let component: NewBox;
  let fixture: ComponentFixture<NewBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
