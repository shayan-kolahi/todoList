import {ComponentFixture, TestBed} from "@angular/core/testing";
import {HeaderComponent} from "./header.component";
import {InboxService} from "../../services/inbox.service";

describe("HeaderComponent",()=>{
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [InboxService]
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges()
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set isActiveAside when openMenu is called', () => {
    component.openMenu();
    expect(component.InboxService.isActiveAside()).toBeFalse();
  });
});
