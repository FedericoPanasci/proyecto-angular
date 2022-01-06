import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmMovieComponent } from './adm-movie.component';

describe('AdmMovieComponent', () => {
  let component: AdmMovieComponent;
  let fixture: ComponentFixture<AdmMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
