import {InboxService} from "../../services/inbox.service";
import {ShareModule} from "../share/share.module";
import {InboxComponent} from "./inbox.component";
import {NgxIndexedDBModule} from "ngx-indexed-db";

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.mount(InboxComponent , {
      imports: [NgxIndexedDBModule,ShareModule],
      providers: [InboxService],
    })
  })
})
