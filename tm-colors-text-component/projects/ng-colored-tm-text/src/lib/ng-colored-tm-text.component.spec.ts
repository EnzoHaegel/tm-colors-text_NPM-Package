import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgColoredTmTextComponent } from './ng-colored-tm-text.component';

describe('NgColoredTmTextComponent', () => {
  let component: NgColoredTmTextComponent;
  let fixture: ComponentFixture<NgColoredTmTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgColoredTmTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgColoredTmTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
