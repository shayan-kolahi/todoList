import {AppComponent} from "./app.component";
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HeaderComponent} from "./components/header/header.component";
import {RouterOutlet} from "@angular/router";
import {InboxService} from "./services/inbox.service";

describe("AppComponent",()=>{
  let component: AppComponent;
  let inboxService: InboxService;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [AppComponent,HeaderComponent],
      imports: [RouterOutlet],
      providers: [InboxService]
    });
    inboxService = TestBed.inject(InboxService);
    component = new AppComponent(inboxService);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create AppComponent with InboxService injected', () => {
    expect(component.InboxService).toBeDefined();
  });
  it('should setActiveAside when window width <= 1200', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(1200);
    component.ngOnInit();
    expect(inboxService.isActiveAside()).toBeTrue();
  });
  it('should not setActiveAside when window width > 1200', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(1300);
    component.ngOnInit();
    expect(inboxService.isActiveAside()).toBeFalse();
  });
})
