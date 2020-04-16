import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jogo2048Page } from './jogo2048.page';

describe('Jogo2048Page', () => {
  let component: Jogo2048Page;
  let fixture: ComponentFixture<Jogo2048Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jogo2048Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jogo2048Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
