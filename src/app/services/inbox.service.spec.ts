import {InboxService} from './inbox.service';

describe('InboxService', () => {

  it('ok InboxService make', () => {
    let Inbox_Service: InboxService = new InboxService();
    expect(Inbox_Service).toBeTruthy();
  })

  // signal
  it('ok isActiveBoxAddTask', () => {
    let Inbox_Service = new InboxService();
    expect(Inbox_Service.isActiveBoxAddTask()).toBe(false);
  })
  it('ok isActiveBoxEditeTask', () => {
    let Inbox_Service = new InboxService();
    expect(Inbox_Service.isActiveBoxEditeTask()).toBe(0);
  })
  it('ok isActiveAside', () => {
    let Inbox_Service = new InboxService();
    expect(Inbox_Service.isActiveAside()).toBe(false);
  })
  // signal

  // BehaviorSubject
  it('ok subjectAddTask$ first subscribe', () => {
    let Inbox_Service = new InboxService();
    Inbox_Service.subjectAddTask$.subscribe((response) => {
      expect(response).toBe(null);
    })
  })
  it('ok subjectAddTask$ subscribe true', () => {
    let Inbox_Service = new InboxService();
    Inbox_Service.subjectAddTask$.next(true)
    Inbox_Service.subjectAddTask$.subscribe((response) => {
      expect(response).toBe(true);
    })
  })
  it('ok subjectAddTask$ subscribe false', () => {
    let Inbox_Service = new InboxService();
    Inbox_Service.subjectAddTask$.next(false)
    Inbox_Service.subjectAddTask$.subscribe((response) => {
      expect(response).toBe(false);
    })
  })

  it('ok subjectEditeTask$ first subscribe', () => {
    let Inbox_Service = new InboxService();
    Inbox_Service.subjectEditeTask$.subscribe((response) => {
      expect(response).toBe(null);
    })
  })
  it('ok subjectEditeTask$ subscribe true', () => {
    let Inbox_Service = new InboxService();
    Inbox_Service.subjectEditeTask$.next(true)
    Inbox_Service.subjectEditeTask$.subscribe((response) => {
      expect(response).toBe(true);
    })
  })
  it('ok subjectEditeTask$ subscribe false', () => {
    let Inbox_Service = new InboxService();
    Inbox_Service.subjectEditeTask$.next(false)
    Inbox_Service.subjectEditeTask$.subscribe((response) => {
      expect(response).toBe(false);
    })
  })
  // BehaviorSubject

});
