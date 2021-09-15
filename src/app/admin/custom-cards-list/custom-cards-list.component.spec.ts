import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCardsListComponent } from './custom-cards-list.component';

describe('CustomCardsListComponent', () => {
  let component: CustomCardsListComponent;
  let fixture: ComponentFixture<CustomCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCardsListComponent ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
