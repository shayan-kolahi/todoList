import {Component, ViewChild} from '@angular/core';
import {InboxService} from "../../../../services/inbox.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ConfirmationService} from "primeng/api";
import {NgxIndexedDBService} from "ngx-indexed-db";

@Component({
  selector: 'app-form-add-task',
  templateUrl: './form-add-task.component.html',
  styleUrl: './form-add-task.component.scss',
  providers: [ConfirmationService]
})
export class FormAddTaskComponent {
  constructor(private InboxService:InboxService,private confirmationService: ConfirmationService,private dbService: NgxIndexedDBService) {}
  @ViewChild('taskName') taskName_input:any;
  @ViewChild('description') description_input:any;
  close(event: Event){
    if (!this.isDisabled){
      this.InboxService.for_open_close_box_add_task.set(false)
    } else {
      this.confirmation_primeng(event)
    }
  }
  confirmation_primeng(event: Event){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'تغییراتی که ایجاد کرده اید ذخیره نمی شوند. ',
      header: 'لغو تغییرات؟',
      icon: 'none',
      acceptIcon:"none",
      rejectIcon:"none",
      acceptLabel: "بله",
      rejectLabel: "خیر",
      acceptButtonStyleClass:"p-button-text",
      accept: () => {
        this.InboxService.for_open_close_box_add_task.set(false)
      },
      reject: () => {
      }
    });
  }

  profileForm:FormGroup = new FormGroup({
    taskName: new FormControl(""),
    description: new FormControl(""),
  });
  onSubmit() {
    this.dbService
      .add('task', this.profileForm.value)
      .subscribe(() => {
        this.InboxService.numberCard.next(true);
        this.taskName_input.nativeElement.focus()
        this.taskName_input.nativeElement.value = "";
        this.description_input.nativeElement.value = "";
        this.profileForm.value.taskName = "";
        this.profileForm.value.description = "";
        this.isDisabled = false;
      });
  }


  isDisabled:boolean = false;
  check_input(e:any){
    this.isDisabled = e.target.value.length >= 1;
  }
}
