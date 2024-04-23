import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
const dbConfig: any  = {
  name: 'task',
  version: 1,
  objectStoresMeta: [{
    store: 'task',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'taskName', keypath: 'taskName', options: { unique: false } },
      { name: 'description', keypath: 'description', options: { unique: false } }
    ]
  }]
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxIndexedDBModule.forRoot(dbConfig)
  ],
  exports: [

  ]
})
export class ShareModule { }
