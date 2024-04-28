import {Injectable, signal, WritableSignal} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InboxService {
  constructor() {
  }

  isActiveBoxAddTask: WritableSignal<boolean> = signal(false);
  isActiveBoxEditeTask: WritableSignal<number> = signal(0);
  isActiveAside: WritableSignal<boolean> = signal(false);

  subjectAddTask$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  subjectEditeTask$: BehaviorSubject<any> = new BehaviorSubject<any>(null);
}
