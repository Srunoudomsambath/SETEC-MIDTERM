import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfiniteRun } from './ifinite-run';

describe('IfiniteRun', () => {
  let component: IfiniteRun;
  let fixture: ComponentFixture<IfiniteRun>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfiniteRun]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfiniteRun);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
