import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InoInputWrapperComponent } from './ino-input-wrapper.component';

describe('InoInputWrapperComponent', () => {
  let component: InoInputWrapperComponent;
  let fixture: ComponentFixture<InoInputWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InoInputWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InoInputWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
