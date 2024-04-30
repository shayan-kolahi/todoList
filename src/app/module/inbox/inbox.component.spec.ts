import {ComponentFixture, TestBed} from '@angular/core/testing';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { InboxComponent } from './inbox.component';
import { InboxService } from '../../services/inbox.service';
import {ShareModule} from "../share/share.module";
import {TaskListComponent} from "./components/task-list/task-list.component";

describe('InboxComponent', () => {
  let component: InboxComponent;
  let fixture: ComponentFixture<InboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxIndexedDBModule,ShareModule],
      declarations: [InboxComponent,TaskListComponent],
      providers: [InboxService],
    }).compileComponents();
    fixture = TestBed.createComponent(InboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create InboxComponent with InboxService injected', () => {
    expect(component.InboxService).toBeDefined();
  });
  it('should create AppComponent with initial values', () => {
    expect(component.isDataTask).toBeFalse();
  });
  it('should set isActiveBoxAddTask and isActiveBoxEditeTask when open_box_add_task is called', () => {
    component.open_box_add_task();
    expect(component.InboxService.isActiveBoxAddTask()).toBeTrue();
    expect(component.InboxService.isActiveBoxEditeTask()).toBe(0);
  });

});
