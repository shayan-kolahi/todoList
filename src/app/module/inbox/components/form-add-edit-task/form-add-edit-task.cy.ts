import {NgxIndexedDBService} from "ngx-indexed-db";
import {ShareModule} from "../../../share/share.module";
import {InboxService} from "../../../../services/inbox.service";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ConfirmationService, MessageService} from "primeng/api";
import {FormAddEditTaskComponent} from "./form-add-edit-task.component";

describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.mount(FormAddEditTaskComponent , {
      imports: [ShareModule,ToastModule,ConfirmDialogModule,FormsModule,ReactiveFormsModule],
      providers: [InboxService,ConfirmationService,NgxIndexedDBService,MessageService]
    })
  })
})
