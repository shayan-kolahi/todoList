import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {InboxService} from "./services/inbox.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent implements OnInit {
  constructor(public InboxService: InboxService) {
  }

  ngOnInit() {
    if (window.innerWidth <= 1200) {
      this.InboxService.isActiveAside.set(true)
    }
  }

  sut: any = true
}
