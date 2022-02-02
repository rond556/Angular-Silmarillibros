import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCharacterTableComponent } from './app-character-table.component';

describe('AppCharacterTableComponent', () => {
  let component: AppCharacterTableComponent;
  let fixture: ComponentFixture<AppCharacterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCharacterTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCharacterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
