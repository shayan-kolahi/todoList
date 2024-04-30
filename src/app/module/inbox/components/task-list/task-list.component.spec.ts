import {ComponentFixture, TestBed} from "@angular/core/testing";
import {NgxIndexedDBModule} from "ngx-indexed-db";
import {ShareModule} from "../../../share/share.module";
import {TaskListComponent} from "./task-list.component";
import {InboxService} from "../../../../services/inbox.service";

describe("TaskListComponent",()=>{
  let component: TaskListComponent;
  let fixture: ComponentFixture<TaskListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxIndexedDBModule,ShareModule],
      declarations: [TaskListComponent],
      providers: [InboxService],
    }).compileComponents();
    fixture = TestBed.createComponent(TaskListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('function edite', () => {
    component.edite(2, new Event('click'))
    component.InboxService.isActiveBoxEditeTask.set(2)
    component.InboxService.subjectEditeTask$.next(true);
    expect(component.InboxService.isActiveBoxEditeTask()).toBe(2);
    component.InboxService.subjectEditeTask$.subscribe((res)=>{
      expect(res).toBe(true);
    })
  });





})
