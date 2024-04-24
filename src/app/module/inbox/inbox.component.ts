import {Component} from '@angular/core';
import {InboxService} from "../../services/inbox.service";
import {NgxIndexedDBService} from "ngx-indexed-db";


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.scss',
})
export class InboxComponent {
  is_data_task:boolean = false;
  constructor(protected InboxService: InboxService,private dbService: NgxIndexedDBService) {
    this.InboxService.BehaviorSubject_add_task.subscribe(
      () => {
        this.dbService.getAll('task').subscribe((task:any[]) => {
          this.is_data_task = task.length === 0;
        });
      }
    )
  }
  open_box_add_task() {
    this.InboxService.for_open_close_box_add_task.set(true)
    this.InboxService.for_open_close_box_edite_task.set(0)
  }

}
