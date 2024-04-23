import {Component} from '@angular/core';
import {InboxService} from "../../../../services/inbox.service";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {ConfirmationService} from "primeng/api";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  providers: [ConfirmationService]
})
export class TaskListComponent {
  data_task:any;
  is_data_task:boolean = false;
  constructor(private confirmationService: ConfirmationService,private InboxService:InboxService,private dbService: NgxIndexedDBService) {
    this.InboxService.numberCard.subscribe(
      () => {
        this.dbService.getAll('task').subscribe((task:any[]) => {
          this.data_task = task;
          if (this.data_task.length >= 0){
            this.is_data_task = true;
          }
        });
      }
    )
  }

  remove(id:any,event:MouseEvent) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'آیا مطمئنید که میخواهید حذف کنید ؟',
      header: ' ',
      icon: 'none',
      acceptIcon:"none",
      rejectIcon:"none",
      acceptLabel: "بله",
      rejectLabel: "خیر",
      acceptButtonStyleClass:"p-button-text",
      accept: () => {
        this.dbService.bulkDelete('task', [id]).subscribe((result) => {
          this.data_task = result[0];
          this.InboxService.numberCard.next(true);
        });
      },
      reject: () => {
      }
    });


  }

}
