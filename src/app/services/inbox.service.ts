import {Injectable, signal, WritableSignal} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InboxService {
  constructor() {}
  for_open_close_box_add_task:WritableSignal<boolean> = signal(false);
  for_open_close_box_edite_task:WritableSignal<number> = signal(0);
  is_aside:WritableSignal<boolean> = signal(false);

  BehaviorSubject_add_task: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  BehaviorSubject_edite_task: BehaviorSubject<any> = new BehaviorSubject<any>(null);
}
