import {Component, OnDestroy} from '@angular/core';
import {InboxService} from "../../../../services/inbox.service";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {ConfirmationService} from "primeng/api";
import {Subscription} from "rxjs";
import {TEXT_3, TEXT_4, TEXT_5} from "../../../../../assets/lang/fa";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
  providers: [ConfirmationService]
})
export class TaskListComponent implements OnDestroy {
  dataTask: any;
  private subscriptions: Subscription[] = [];
  constructor(private ConfirmationService: ConfirmationService, private InboxService: InboxService, private DbService: NgxIndexedDBService) {
    this.subscriptions.push(
      this.InboxService.subjectAddTask$.subscribe(
        () => {
          this.subscriptions.push(
            this.DbService.getAll('task').subscribe((task: any[]) => {
              this.dataTask = task;
            })
          )
        }
      )
    )
  }

  remove(id: any, event: MouseEvent) {
    event.stopPropagation();
    this.ConfirmationService.confirm({
      target: event.target as EventTarget,
      message: TEXT_5,
      header: ' ',
      icon: 'none',
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: TEXT_3,
      rejectLabel: TEXT_4,
      acceptButtonStyleClass: "p-button-text",
      accept: () => {
        this.subscriptions.push(
          this.DbService.bulkDelete('task', [id]).subscribe((result) => {
            this.dataTask = result[0];
            this.InboxService.subjectAddTask$.next(true);
          })
        )
      },
      reject: () => {
      }
    });
  }

  edite(id: any, event: MouseEvent) {
    event.stopPropagation();
    this.InboxService.isActiveBoxEditeTask.set(id)
    this.InboxService.subjectEditeTask$.next(true);
  }


  visible: boolean = false;
  showDialog_data: any;

  showDialog(id: number) {
    this.showDialog_data = this.dataTask.find((obj: any) => obj.id === id)
    this.visible = true;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
