import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import { AlertNoTaskComponent } from './components/alert-no-task/alert-no-task.component';
import {FormAddEditTaskComponent} from "./components/form-add-edit-task/form-add-edit-task.component";
import { TaskListComponent } from './components/task-list/task-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ShareModule} from "../share/share.module";

@NgModule({
  declarations: [
    InboxComponent,
    AlertNoTaskComponent,
    FormAddEditTaskComponent,
    TaskListComponent,
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    ShareModule
  ]
})
export class InboxModule { }
