import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExclusionComponent } from './add-exclusion.component';

describe('AddExclusionComponent', () => {
  let component: AddExclusionComponent;
  let fixture: ComponentFixture<AddExclusionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExclusionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExclusionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
