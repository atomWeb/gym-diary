import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntryFormReactiveComponent } from './new-entry-form-reactive.component';

describe('NewEntryFormReactiveComponent', () => {
  let component: NewEntryFormReactiveComponent;
  let fixture: ComponentFixture<NewEntryFormReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewEntryFormReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewEntryFormReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
