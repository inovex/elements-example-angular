import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InoSidebarShowcaseComponent } from './ino-sidebar-showcase.component';

describe('InoSidebarShowcaseComponent', () => {
  let component: InoSidebarShowcaseComponent;
  let fixture: ComponentFixture<InoSidebarShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InoSidebarShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InoSidebarShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
