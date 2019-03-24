import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbLoginComponent } from './fb-login.component';

describe('FbLoginComponent', () => {
  let component: FbLoginComponent;
  let fixture: ComponentFixture<FbLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
