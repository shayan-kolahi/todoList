import {ComponentFixture, TestBed} from '@angular/core/testing';
import { InboxService } from '../../services/inbox.service';
import {SideBarComponent} from "./side-bar.component";
import {NgxIndexedDBService} from "ngx-indexed-db";
import {ShareModule} from "../../module/share/share.module";

describe('SideBarComponent', () => {
  let component: SideBarComponent;
  let fixture: ComponentFixture<SideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideBarComponent],
      providers: [InboxService],
      imports:[ShareModule]
    }).compileComponents();
    fixture = TestBed.createComponent(SideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create SideBarComponent with InboxService injected', () => {
    expect(component.InboxService).toBeDefined();
  });
  it('should set isActiveAside when closeMenu is called', () => {
    component.closeMenu();
    expect(component.InboxService.isActiveAside()).toBeTrue();
  });
});
