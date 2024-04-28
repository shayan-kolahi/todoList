import { TestBed } from '@angular/core/testing';

import { InboxService } from './inbox.service';
import {signal} from "@angular/core";

describe('InboxService', () => {

  it('ok InboxService make',()=>{
    let Inbox_Service:InboxService = new InboxService();
    expect(Inbox_Service).toBeTruthy();
  })

  // signal
  it('ok for_open_close_box_add_task',()=>{
    let Inbox_Service = new InboxService();
    expect(Inbox_Service.for_open_close_box_add_task()).toBe(false);
  })
  it('ok for_open_close_box_edite_task',()=>{
    let Inbox_Service = new InboxService();
    expect(Inbox_Service.for_open_close_box_edite_task()).toBe(0);
  })
  it('ok is_aside',()=>{
    let Inbox_Service = new InboxService();
    expect(Inbox_Service.is_aside()).toBe(false);
  })
  // signal

  // BehaviorSubject
  it('ok BehaviorSubject_add_task first subscribe',()=>{
    let Inbox_Service = new InboxService();
    Inbox_Service.BehaviorSubject_add_task.subscribe((response)=>{
      expect(response).toBe(null);
    })
  })
  it('ok BehaviorSubject_add_task subscribe true',()=>{
    let Inbox_Service = new InboxService();
    Inbox_Service.BehaviorSubject_add_task.next(true)
    Inbox_Service.BehaviorSubject_add_task.subscribe((response)=>{
      expect(response).toBe(true);
    })
  })
  it('ok BehaviorSubject_add_task subscribe false',()=>{
    let Inbox_Service = new InboxService();
    Inbox_Service.BehaviorSubject_add_task.next(false)
    Inbox_Service.BehaviorSubject_add_task.subscribe((response)=>{
      expect(response).toBe(false);
    })
  })

  it('ok BehaviorSubject_edite_task first subscribe',()=>{
    let Inbox_Service = new InboxService();
    Inbox_Service.BehaviorSubject_edite_task.subscribe((response)=>{
      expect(response).toBe(null);
    })
  })
  it('ok BehaviorSubject_edite_task subscribe true',()=>{
    let Inbox_Service = new InboxService();
    Inbox_Service.BehaviorSubject_edite_task.next(true)
    Inbox_Service.BehaviorSubject_edite_task.subscribe((response)=>{
      expect(response).toBe(true);
    })
  })
  it('ok BehaviorSubject_edite_task subscribe false',()=>{
    let Inbox_Service = new InboxService();
    Inbox_Service.BehaviorSubject_edite_task.next(false)
    Inbox_Service.BehaviorSubject_edite_task.subscribe((response)=>{
      expect(response).toBe(false);
    })
  })
  // BehaviorSubject

});
