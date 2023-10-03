import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogImageViewComponent } from './dog-image-view.component';

describe('DogImageViewComponent', () => {
  let component: DogImageViewComponent;
  let fixture: ComponentFixture<DogImageViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogImageViewComponent]
    });
    fixture = TestBed.createComponent(DogImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
