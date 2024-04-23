import {Injectable, signal, WritableSignal} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InboxService {
  constructor() {}
  for_open_close_box_add_task:WritableSignal<boolean> = signal(false);

  numberCard: BehaviorSubject<any> = new BehaviorSubject<any>(null);

}
