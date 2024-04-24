import { Component } from '@angular/core';
import {InboxService} from "../../services/inbox.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(protected InboxService: InboxService) {}

  openMenu() {
    this.InboxService.is_aside.set(false)
  }
}
