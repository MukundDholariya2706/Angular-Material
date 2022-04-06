/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BagesComponent } from './bages.component';

describe('BagesComponent', () => {
  let component: BagesComponent;
  let fixture: ComponentFixture<BagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
