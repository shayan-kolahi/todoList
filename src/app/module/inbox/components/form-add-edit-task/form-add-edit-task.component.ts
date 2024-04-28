import {Component, OnDestroy, ViewChild} from '@angular/core';
import {InboxService} from "../../../../services/inbox.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ConfirmationService} from "primeng/api";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {Subscription} from "rxjs";
import {TEXT_1, TEXT_2, TEXT_3, TEXT_4} from '../../../../../assets/lang/fa';


@Component({
  selector: 'app-form-add-edit-task',
  templateUrl: './form-add-edit-task.component.html',
  styleUrl: './form-add-edit-task.component.scss',
  providers: [ConfirmationService]
})
export class FormAddEditTaskComponent implements OnDestroy {
  profileForm: FormGroup = new FormGroup({
    taskName: new FormControl(""),
    description: new FormControl(""),
  });
  private subscriptions: Subscription[] = [];

  constructor(public InboxService: InboxService, private ConfirmationService: ConfirmationService, private DbService: NgxIndexedDBService) {
    this.subscriptions.push(
      this.InboxService.subjectEditeTask$.subscribe(
        () => {
          if (this.InboxService.isActiveBoxEditeTask() !== 0) {
            this.isDisabled = true;
            this.subscriptions.push(
              this.DbService.bulkGet('task', [this.InboxService.isActiveBoxEditeTask()]).subscribe((results: any) => {
                this.profileForm.controls['taskName'].reset(results[0].taskName, {emitEvent: false})
                this.profileForm.controls['description'].reset(results[0].description, {emitEvent: false})
              })
            )
          }
        }
      )
    )

  }

  @ViewChild('taskName') taskName_input: any;

  close(event: Event) {
    if (!this.isDisabled) {
      this.InboxService.isActiveBoxAddTask.set(false)
      this.InboxService.isActiveBoxEditeTask.set(0)
    } else {
      this.confirmation_primeng(event)
    }
  }

  confirmation_primeng(event: Event) {
    this.ConfirmationService.confirm({
      target: event.target as EventTarget,
      message: TEXT_1,
      header: TEXT_2,
      icon: 'none',
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: TEXT_3,
      rejectLabel: TEXT_4,
      acceptButtonStyleClass: "p-button-text",
      accept: () => {
        this.InboxService.isActiveBoxAddTask.set(false)
        this.InboxService.isActiveBoxEditeTask.set(0)
      },
      reject: () => {
      }
    });
  }


  onSubmit() {
    if (this.InboxService.isActiveBoxEditeTask() === 0) {
      this.subscriptions.push(
        this.DbService
          .add('task', this.profileForm.value)
          .subscribe(() => {
            this.InboxService.subjectAddTask$.next(true);
            this.taskName_input.nativeElement.focus();
            this.profileForm.controls['taskName'].reset('', {emitEvent: false})
            this.profileForm.controls['description'].reset('', {emitEvent: false})
            this.isDisabled = false;
          })
      )
    } else {
      this.subscriptions.push(
        this.DbService
          .update('task', {
            id: this.InboxService.isActiveBoxEditeTask(),
            description: this.profileForm.value.description,
            taskName: this.profileForm.value.taskName,
          })
          .subscribe((storeData) => {
            this.InboxService.subjectAddTask$.next(false);
            this.taskName_input.nativeElement.focus();
            this.profileForm.controls['taskName'].reset('', {emitEvent: false})
            this.profileForm.controls['description'].reset('', {emitEvent: false})
            this.isDisabled = false;
          })
      )
      this.InboxService.isActiveBoxEditeTask.set(0)
    }


  }


  isDisabled: boolean = false;

  check_input(e: KeyboardEvent) {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    this.isDisabled = target.value.length >= 1 && target.value.trim().length !== 0;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
