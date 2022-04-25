import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsingleComponent } from './studentsingle.component';

describe('StudentsingleComponent', () => {
  let component: StudentsingleComponent;
  let fixture: ComponentFixture<StudentsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
