import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddEditTaskComponent } from './form-add-edit-task.component';

describe('FormAddTaskComponent', () => {
  let component: FormAddEditTaskComponent;
  let fixture: ComponentFixture<FormAddEditTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAddEditTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
