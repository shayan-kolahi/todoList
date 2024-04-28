import {Component, OnDestroy} from '@angular/core';
import {InboxService} from "../../services/inbox.service";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss',
})
export class InboxComponent implements OnDestroy {
  isDataTask: boolean = false;
  private subscriptions: Subscription[] = [];
  constructor(public InboxService: InboxService, private DbService: NgxIndexedDBService) {
    this.subscriptions.push(
      this.InboxService.subjectAddTask$.subscribe(
        () => {
          this.subscriptions.push(
            this.DbService.getAll('task').subscribe((task: any[]) => {
              this.isDataTask = task.length === 0;
            })
          )
        }
      )
    )
  }

  open_box_add_task() {
    this.InboxService.isActiveBoxAddTask.set(true)
    this.InboxService.isActiveBoxEditeTask.set(0)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

}
