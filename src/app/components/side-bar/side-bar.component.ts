import {Component} from '@angular/core';
import {InboxService} from "../../services/inbox.service";
import {NgxIndexedDBService} from "ngx-indexed-db";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {


  data_task:number = 0;
  constructor(protected InboxService: InboxService,private dbService: NgxIndexedDBService) {
    this.InboxService.BehaviorSubject_add_task.subscribe(
      () => {
        this.dbService.getAll('task').subscribe((task:any[]) => {
          this.data_task = task.length;
        });
      }
    )
  }

  closeMenu() {
    this.InboxService.is_aside.set(true)
  }
}
