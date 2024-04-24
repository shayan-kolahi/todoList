import {Component, ViewChild} from '@angular/core';
import {InboxService} from "../../../../services/inbox.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ConfirmationService} from "primeng/api";
import {NgxIndexedDBService} from "ngx-indexed-db";

@Component({
  selector: 'app-form-add-edit-task',
  templateUrl: './form-add-edit-task.component.html',
  styleUrl: './form-add-edit-task.component.scss',
  providers: [ConfirmationService]
})
export class FormAddEditTaskComponent {
  profileForm: FormGroup = new FormGroup({
    taskName: new FormControl(""),
    description: new FormControl(""),
  });

  constructor(public InboxService: InboxService, private confirmationService: ConfirmationService, private dbService: NgxIndexedDBService) {
    this.InboxService.BehaviorSubject_edite_task.subscribe(
      () => {
        if (this.InboxService.for_open_close_box_edite_task() !== 0) {
          this.isDisabled = true;
          this.dbService.bulkGet('task', [this.InboxService.for_open_close_box_edite_task()]).subscribe((results: any) => {
            this.description_input.nativeElement.value = results[0].description
            this.taskName_input.nativeElement.value = results[0].taskName
            this.profileForm.value.taskName = results[0].taskName
            this.profileForm.value.description = results[0].description
          });
        }
      }
    )
  }

  @ViewChild('taskName') taskName_input: any;
  @ViewChild('description') description_input: any;

  close(event: Event) {
    if (!this.isDisabled) {
      this.InboxService.for_open_close_box_add_task.set(false)
      this.InboxService.for_open_close_box_edite_task.set(0)
    } else {
      this.confirmation_primeng(event)
    }
  }

  confirmation_primeng(event: Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'تغییراتی که ایجاد کرده اید ذخیره نمی شوند. ',
      header: 'لغو تغییرات؟',
      icon: 'none',
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: "بله",
      rejectLabel: "خیر",
      acceptButtonStyleClass: "p-button-text",
      accept: () => {
        this.InboxService.for_open_close_box_add_task.set(false)
        this.InboxService.for_open_close_box_edite_task.set(0)
      },
      reject: () => {
      }
    });
  }


  onSubmit() {
    if (this.InboxService.for_open_close_box_edite_task() === 0) {
      this.dbService
        .add('task', this.profileForm.value)
        .subscribe(() => {
          this.InboxService.BehaviorSubject_add_task.next(true);
          this.taskName_input.nativeElement.focus();
          this.taskName_input.nativeElement.value = "";
          this.description_input.nativeElement.value = "";
          this.profileForm.value.taskName = "";
          this.profileForm.value.description = "";
          this.isDisabled = false;
        });
    } else {
      this.dbService
        .update('task', {
          id: this.InboxService.for_open_close_box_edite_task(),
          description: this.description_input.nativeElement.value,
          taskName: this.taskName_input.nativeElement.value,
        })
        .subscribe((storeData) => {
          this.InboxService.BehaviorSubject_add_task.next(false);
          this.taskName_input.nativeElement.value = "";
          this.description_input.nativeElement.value = "";
          this.profileForm.value.taskName = "";
          this.profileForm.value.description = "";
          this.isDisabled = false;
        });
      this.InboxService.for_open_close_box_edite_task.set(0)
    }


  }


  isDisabled: boolean = false;

  check_input(e: any) {
    this.isDisabled = e.target.value.length >= 1 && e.target.value.trim().length !== 0;
  }
}
