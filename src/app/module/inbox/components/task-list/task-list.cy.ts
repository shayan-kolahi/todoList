import {NgxIndexedDBModule} from "ngx-indexed-db";
import {ShareModule} from "../../../share/share.module";
import {TaskListComponent} from "./task-list.component";
import {InboxService} from "../../../../services/inbox.service";

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.mount(TaskListComponent , {
      imports: [NgxIndexedDBModule,ShareModule],
      providers: [InboxService],
    })
  })
})
