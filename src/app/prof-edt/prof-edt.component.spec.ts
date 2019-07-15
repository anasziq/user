import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfEdtComponent } from './prof-edt.component';

describe('ProfEdtComponent', () => {
  let component: ProfEdtComponent;
  let fixture: ComponentFixture<ProfEdtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfEdtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfEdtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
