import {TestBed} from "@angular/core/testing";
import {AlertNoTaskComponent} from "./alert-no-task.component";

describe("AlertNoTaskComponent",()=>{
  let component: AlertNoTaskComponent;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [AlertNoTaskComponent]
    });
    component = new AlertNoTaskComponent();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
