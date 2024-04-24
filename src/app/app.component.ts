import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import {InboxService} from "./services/inbox.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [MessageService]
})
export class AppComponent {
  constructor(protected InboxService: InboxService) {}
}
