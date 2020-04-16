import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JogoDaVelhaPage } from './jogo-da-velha.page';

describe('JogoDaVelhaPage', () => {
  let component: JogoDaVelhaPage;
  let fixture: ComponentFixture<JogoDaVelhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JogoDaVelhaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JogoDaVelhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
