import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxComponent } from './inbox.component';
import {SplitButtonModule} from "primeng/splitbutton";
@NgModule({
  declarations: [
    InboxComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    NgOptimizedImage,
    SplitButtonModule,
  ]
})
export class InboxModule { }
