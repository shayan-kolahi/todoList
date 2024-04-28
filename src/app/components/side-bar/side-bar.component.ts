import {Component, OnDestroy, OnInit} from '@angular/core';
import {InboxService} from "../../services/inbox.service";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent implements OnDestroy {


  dataTask: number = 0;
  private subscriptions: Subscription[] = [];

  constructor(private InboxService: InboxService, private DbService: NgxIndexedDBService) {
    this.subscriptions.push(
      this.InboxService.subjectAddTask$.subscribe(
        () => {
          this.subscriptions.push(
            this.DbService.getAll('task').subscribe((task: any[]) => {
              this.dataTask = task.length;
            })
          );
        }
      )
    )
  }

  closeMenu() {
    this.InboxService.isActiveAside.set(true)
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
