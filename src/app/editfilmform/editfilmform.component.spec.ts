import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfilmformComponent } from './editfilmform.component';

describe('EditfilmformComponent', () => {
  let component: EditfilmformComponent;
  let fixture: ComponentFixture<EditfilmformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditfilmformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditfilmformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
