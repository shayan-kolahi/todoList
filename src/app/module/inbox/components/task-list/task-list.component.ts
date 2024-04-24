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
  constructor(private confirmationService: ConfirmationService,private InboxService:InboxService,private dbService: NgxIndexedDBService) {
    this.InboxService.BehaviorSubject_add_task.subscribe(
      () => {
        this.dbService.getAll('task').subscribe((task:any[]) => {
          this.data_task = task;
        });
      }
    )
  }

  remove(id:any,event:MouseEvent) {
    event.stopPropagation();
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
          this.InboxService.BehaviorSubject_add_task.next(true);
        });
      },
      reject: () => {
      }
    });
  }
  edite(id:any,event:MouseEvent){
    event.stopPropagation();
    this.InboxService.for_open_close_box_edite_task.set(id)
    this.InboxService.BehaviorSubject_edite_task.next(true);
  }


  visible: boolean = false;
  showDialog_data:any;
  showDialog(id:number) {
    this.showDialog_data = this.data_task.find((obj:any) => obj.id === id)
    this.visible = true;
  }

}
