import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertNoTaskComponent } from './alert-no-task.component';

describe('AlertNoTaskComponent', () => {
  let component: AlertNoTaskComponent;
  let fixture: ComponentFixture<AlertNoTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertNoTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlertNoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
