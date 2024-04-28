import {Component} from '@angular/core';
import {InboxService} from "../../services/inbox.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(public InboxService: InboxService) {
  }

  openMenu() {
    this.InboxService.isActiveAside.set(false)
  }
}
