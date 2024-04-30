import {InboxService} from "../../../../services/inbox.service";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {FormAddEditTaskComponent} from "./form-add-edit-task.component";
import {ShareModule} from "../../../share/share.module";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {ConfirmationService, MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe("FormAddEditTaskComponent",()=>{
  let component: FormAddEditTaskComponent;
  let fixture: ComponentFixture<FormAddEditTaskComponent>;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [FormAddEditTaskComponent],
      imports: [ShareModule,ToastModule,ConfirmDialogModule,FormsModule,ReactiveFormsModule],
      providers: [InboxService,ConfirmationService,NgxIndexedDBService,MessageService]
    });
    fixture = TestBed.createComponent(FormAddEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create AppComponent with InboxService injected', () => {
    expect(component.InboxService).toBeDefined();
  });
  it('should disable form elements when isActiveBoxEditeTask is not 0', () => {
    spyOn(component.InboxService, 'isActiveBoxEditeTask').and.returnValue(1);
    component.InboxService.subjectEditeTask$.next(null);
    fixture.detectChanges();
    expect(component.isDisabled).toBe(true);
  });
  it('should reset form and enable elements when isActiveBoxEditeTask is 0', () => {
    spyOn(component.InboxService, 'isActiveBoxEditeTask').and.returnValue(0);
    component.isDisabled = true;
    component.InboxService.subjectEditeTask$.next(null);
    fixture.detectChanges();
    expect(component.isDisabled).toBe(true);
    expect(component.profileForm.controls['taskName'].value).toBe('');
    expect(component.profileForm.controls['description'].value).toBe('');
  });
  it('should close the form when not disabled and isActiveBoxEditeTask is 0', () => {
    spyOn(component.InboxService.isActiveBoxAddTask, 'set');
    spyOn(component.InboxService.isActiveBoxEditeTask, 'set');
    spyOn(component, 'confirmation_primeng');
    spyOn(component.InboxService, 'isActiveBoxEditeTask').and.returnValue(0);
    component.isDisabled = false;
    component.close(new Event('click'));
    expect(component.InboxService.isActiveBoxAddTask.set).toHaveBeenCalledWith(false);
    expect(component.InboxService.isActiveBoxEditeTask.set).toHaveBeenCalledWith(0);
    expect(component.confirmation_primeng).not.toHaveBeenCalled();
  });
  it('should call confirmation_primeng when disabled and isActiveBoxEditeTask is not 0', () => {
    spyOn(component, 'confirmation_primeng');
    spyOn(component.InboxService, 'isActiveBoxEditeTask').and.returnValue(1);
    component.isDisabled = true;
    component.close(new Event('click'));
    expect(component.confirmation_primeng).toHaveBeenCalled();
  });
})
