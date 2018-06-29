/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RightpgComponent } from './rightpg.component';

describe('RightpgComponent', () => {
  let component: RightpgComponent;
  let fixture: ComponentFixture<RightpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
