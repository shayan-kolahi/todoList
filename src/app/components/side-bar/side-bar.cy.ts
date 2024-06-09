import {SideBarComponent} from "./side-bar.component";
import {InboxService} from "../../services/inbox.service";
import {ShareModule} from "../../module/share/share.module";

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.mount(SideBarComponent , {
      providers: [InboxService],
      imports:[ShareModule]
    })
  })
})
