import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewroomFormComponent } from './newroom-form.component';

describe('NewroomFormComponent', () => {
  let component: NewroomFormComponent;
  let fixture: ComponentFixture<NewroomFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewroomFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewroomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
